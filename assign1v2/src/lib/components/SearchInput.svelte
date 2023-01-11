<script lang="ts">
    import searchIcon from "$lib/images/search.svg";
    import { createEventDispatcher } from "svelte";

    let query = "";

    const dispatch = createEventDispatcher();

    function onQuery() {
        dispatch("message", query);
    }
</script>

<div class="search">
        <input type="search" bind:value="{query}" 
        on:keypress={(key) => { 
            if (key.code == "Enter"){
                onQuery();
            }                
        }} >
        <button on:click={() => onQuery()}>
            <img src={searchIcon} alt="Search"/>
        </button>
        <slot />
    </div>

<style>
    .search {
        position: relative;
        top: -2.04rem;
        display: block;
    }

    input[type="search"] {
        background: var(--primary-background-200);
        padding: 1rem 3.5rem 1rem 1.5rem;
        width: 48ch;
        font-size: 1.25em;
        border: 2px solid var(--primary-color-700);
        border-radius: 8px;
        box-shadow: 0px 22px 64px #291C51, 
        0px 1px 12px #8157FF;
    }

    .search > button {
        box-sizing: border-box;
        background: transparent;
        border: none;
        position: absolute;
        cursor: pointer;
        right: 1.2rem;
        padding-top: 0.2rem;
        height: 100%;
    }
</style>