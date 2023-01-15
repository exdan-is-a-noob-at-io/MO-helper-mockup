<script lang="ts">
    export var query:string;
    export var pageMax:number;
    export var currPage:number;

    import SearchInput from "$lib/components/SearchInput.svelte";
    import { fly } from 'svelte/transition';

    const queryRecommendations = [
        {
            "label": "topic=ACG",
            "description": "Search by year"
        },
        {
            "label": "id=2016-isl-a1",
            "description": "Search by id"
        },
        {
            "label": "year=2023",
            "description": "Search by year"
        },
        {
            "label": "\"Alice and Bob\"",
            "description": "exact phrase"
        },
        {
            "label": "cou=SIN",
            "description": "search within a country"
        },
        {
            "label": "tags=ISL",
            "description": "filter by tags"
        },
    ]
    
    const search = (userQuery:string) => {
        //alert("deez nuts!")
        goto("/search" + "?q=" + userQuery + "&pageMax=" + pageMax.toString() + "&currPage=" + "1")
        query = userQuery
        updatePageSelector(1)
    }

    import type {QuestionProps} from "$lib/components/QuestionCard.svelte";
    import QuestionCard from "$lib/components/QuestionCard.svelte";
	import { construct_svelte_component } from "svelte/internal";
	import { goto } from "$app/navigation";
    
    
    const questionTemp = {
        id:"tstst-2015-1",
        source:"USA TSTST 2015 P1",
        statement:"Lorem ipsum dolor sit amet consectetur. Ultrices amet euismod lectus fames ac donec sit vulputate auctor.",
        country:"USA",
        tags:["algebra", "geometry", "deez-nuts", "algebra", "geometry", "deez-nuts"]
    }

    var displayedPageNo: {value:string, enabled:boolean}[] = []; // 1 ... n-2 n-1 n n+1 n+2 ... pageMax. represent ... by null
    var displayedPageClickable: boolean[] = [];
    // Updates `dissplayedPages` and `currPage`
    const updatePageSelector = (currPage_: number) => {
        currPage = currPage_;
        var displayedPagesInt = []
        displayedPagesInt.push(1)

        const nPlus2 = Math.min(currPage_ + 1, pageMax - 2)

        if (currPage_ - 3 < 2){
            // first ... not needed
            for (var i = 1; i <= nPlus2; ++i){
                displayedPagesInt.push(i+1)
            }
        }
        else{
            // first ... needed
            displayedPagesInt.push(null)
            for (var i = currPage_ - 3; i <= nPlus2; ++i){            
                displayedPagesInt.push(i+1)
            }
        }


        if (nPlus2 + 2 >= pageMax){
            // second ... not needed
            displayedPagesInt.push(pageMax)
        }
        else {
            // second ... needed
            displayedPagesInt.push(null)
            displayedPagesInt.push(pageMax)
        }


        displayedPageNo = [{
            value: "<",
            enabled: currPage != 1
        }]
        for (var i = 0; i < displayedPagesInt.length; ++i){
            var toAppend = displayedPagesInt[i]
            displayedPageNo.push({
                value: (toAppend == null) ? "..." : toAppend.toString(),
                enabled: toAppend != null
        })
        }
        displayedPageNo.push({
            value: ">",
            enabled: currPage != pageMax
        })
    }

    const onClickPageSelector = (clickedButton:string) => {
        var pageToGoTo;
        if (clickedButton == "<"){
            pageToGoTo = currPage-1
        }
        else if (clickedButton == ">"){
            pageToGoTo = currPage+1
        }
        else{
            pageToGoTo = parseInt(clickedButton)
        }
        goto("/search" + "?q=" + query + "&pageMax=" + pageMax.toString() + "&currPage=" + pageToGoTo.toString())
        updatePageSelector(pageToGoTo)
    }

    updatePageSelector(currPage)
</script>

<section transition:fly="{{ y: 15, duration: 300 }}">
    <div class="search">
        <SearchInput on:message={(event) => search(event.detail)} queryInit={query}>
            <div class="menu">
                <ul>
                    {#each queryRecommendations as rule}
                        <li>
                            <span>{rule.label}</span>
                            <span>{rule.description}</span>
                        </li>
                    {/each}
                </ul>
            </div>
        </SearchInput>
    </div>

    <div id="results">
        {#each Array(10) as _}
            <QuestionCard question={questionTemp}/>            
        {/each}
    </div>

    <div id="pageSelector">
        {#each displayedPageNo as pageString}
            <button disabled={!pageString.enabled} 
                    class:disabled={!pageString.enabled}
                    class:current={pageString.value == currPage.toString()}
                    class:side={pageString.value == "<" || pageString.value == ">"}
                    on:click={() => onClickPageSelector(pageString.value)}
            >
                {pageString.value}
            </button>
        {/each}
    </div>
    
</section>




<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        position: relative;

        background: var(--primary-background-200)
    }

    .search:is(:hover, :focus-within) .menu {
        visibility: visible;
        margin-top: 0.96rem;
        opacity: 1;
    }

    .search .menu {
        opacity: 0;
        visibility: collapse;
        position: absolute;
        width: 100%;

        line-height: 1.3125rem;
        
        box-sizing: border-box;
        margin-top: 0rem;
        padding: 1.44rem 2.28rem;
        border-radius: 8px;

        background-color: var(--primary-background-300);
        
        border: 0.1rem solid #8157FF;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.8),
         0px 4px 16px rgba(0, 0, 0, 0.35);

         transition: all 0.2s ease-in-out;
    }

    .search .menu > ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.3125rem;
        width: 100%;
    }

    .search .menu > ul > li {
        list-style: none;
    }

    #results {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap:wrap;
        /* width: 100%; */
        max-width: 61rem;
    }
    
    .menu > ul > li > span {
        font-size: 0.72rem;        
    }

    .menu > ul > li > span:first-of-type {
        font-weight: bold;
    }

    .menu > ul > li > span:nth-of-type(n + 2) {
        color: var(--primary-color-700)
    }

    .menu > ul > li > span:nth-of-type(n + 2)::before {
        content: "・";
    }

    #pageSelector {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 3rem 0 2rem 0;
        gap: 2rem;
    }

    #pageSelector > button {
        display:grid;
        place-items: center;

        height: 3rem;
        width: 3rem;
        font-size: 1.5rem;
        
        background: none;
        border-color: transparent;
        border-radius: 100vmax;

        color: var(--primary-color-300);
        margin: 0rem, 1rem;
        transition: all 0.1s ease-in-out;

        font-family: var(--primary-font);
    }

    #pageSelector > button:not(.disabled):hover {
        font-size: 1.3rem;
        background: var(--primary-background-400);

        cursor: pointer;
    }

    #pageSelector > button.current {
        font-weight: bold;
        background: var(--primary-background-400);
        color: var(--primary-color-900)
    }

    #pageSelector > button.side {
        font-weight: bold;
        color: var(--primary-color-900)
    }
</style>