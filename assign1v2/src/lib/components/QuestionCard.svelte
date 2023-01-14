<script lang="ts">
    export let question:any
    const questionFiltered = question as QuestionProps
</script>

<script context="module" lang="ts">
    export interface QuestionProps {
        id:string,
        source:string,
        statement:string,
        country:string,
        tags:string[]
    }
</script>

<main>
    <a style="text-decoration: none;" href={"/question/" + questionFiltered.id}>
        <div class="information">
        <div class="identifier">{questionFiltered.id}</div>
        <div style:color="var(--primary-color-900)"
            style:font-size="32px"
            style:font-weight="bold">{questionFiltered.source}</div>
        <div style:color="var(--primary-color-900)"
            style:font-size="16px"
            style:font-weight="bold"
            style:font-family= "Times New Roman">{questionFiltered.statement}</div>
        </div>

        <div class="extra">
            <div class="country">{questionFiltered.country}</div>
            <div class="tags">{questionFiltered.tags.join(", ")}</div>
        </div>
    </a>
    
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: left;

        margin: 1rem;
        box-sizing: border-box;
        max-width: 28.5rem;

        background: var(--primary-background-300);
        border: 1px solid var(--primary-background-400);
        border-radius: 12px;
    }

    .information {
        margin-right: -1px;
        padding: 1.92rem 2.34rem;

        background: var(--primary-background-400);
        border-radius: 10px;
    }

    .identifier {
        font-size: 1.2rem;
        font-weight: bold;
        color: var(--primary-color-300);
    }

    .extra {
        padding: 0.96rem 2rem;

        display: grid;
        place-items: center;
        grid-template-columns: 1fr 2fr;
    }

    .extra > * {
        color:var(--primary-color-700);
        font-size:12px;
        font-weight:bold;

        height: 24px;

        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .country::before {
        content: url("$lib/images/globe.svg");
        transform: translateY(0.15rem);
        padding-right: 0.5rem;
    }

    .tags {
        display:inline-block;
        align-items: center;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width:250px;
    }

    .tags::before {
        display:inline-block;
        content: url("$lib/images/Sigma.svg");
        transform: translateY(0.15rem);
        padding-right: 0.5rem;
    }
</style>