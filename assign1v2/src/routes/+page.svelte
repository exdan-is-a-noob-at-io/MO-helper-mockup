<script lang="ts">
    import SearchInput from "$lib/components/SearchInput.svelte";

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
        alert("deez nuts!")        
    }

    import QuestionCard from "$lib/components/QuestionCard.svelte";
</script>

<header>
    <h1>
        Track Olympiad problems <br />
        with ease.
    </h1>
</header>

<section>
    <div class="search">
        <SearchInput on:message={search}>
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

    {#each Array(10) as _}
        <QuestionCard/>
    {/each}
</section>


<QuestionCard/>

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
</style>