<script lang="ts">
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
    
    let query = "";
    const search = () => {
        //alert("deez nuts!")
        updatePageSelector(1)
    }

	import SearchComponent from "$lib/components/SearchComponent.svelte";
    
    
    const questionTemp = {
        id:"tstst-2015-1",
        source:"USA TSTST 2015 P1",
        statement:"Lorem ipsum dolor sit amet consectetur. Ultrices amet euismod lectus fames ac donec sit vulputate auctor.",
        country:"USA",
        tags:["algebra", "geometry", "deez-nuts", "algebra", "geometry", "deez-nuts"]
    }

    const pageMax = 10;
    var displayedPageNo: {value:string, enabled:boolean}[] = []; // 1 ... n-2 n-1 n n+1 n+2 ... pageMax. represent ... by null
    var displayedPageClickable: boolean[] = [];
    var currPage = 0; // 0 indexed
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
        if (clickedButton == "<"){
            updatePageSelector(currPage-1)
        }
        else if (clickedButton == ">"){
            updatePageSelector(currPage+1)
        }
        else{
            updatePageSelector(parseInt(clickedButton))
        }
    }

    updatePageSelector(1)
</script>

<header transition:fly="{{ y: 15, duration: 300 }}">
    <h1>
        Track Olympiad problems <br />
        with ease.
    </h1>
</header>

<SearchComponent query="" pageMax={20} currPage={1}/>




<style>
    header {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        background: linear-gradient(#020007, #0B0621);
        position: relative;
    }

    header::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.05);
        background-repeat: repeat;
        
        mask-size: 5.76rem;
        -webkit-mask-size: 5.76rem;
        mask-image: url("$lib/images/bamboo.svg");
        -webkit-mask-image: url("$lib/images/bamboo.svg");
    }

    header > h1 {
        z-index: 1;
    }

    h1 {
        font-size: 3.84rem;
        margin-top: 20rem;
        margin-bottom: 11rem;

        font-size: 64px;
        line-height: 124.5%;
        letter-spacing: 0.05em;

        background: linear-gradient(#fff , #5D35FF);
        color: transparent;
        text-shadow: 0px 4px 32px #5D35FF;

        background-clip: text;
        -webkit-background-clip: text;
    }

    
</style>