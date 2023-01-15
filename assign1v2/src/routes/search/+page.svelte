<script lang="ts">
    import SearchComponent from '$lib/components/SearchComponent.svelte';
    import type { PageData } from './$types';

    export let data: PageData;
    let query = data.url.searchParams.get('q')    
    let pageMax = data.url.searchParams.get('pageMax')
    let currPage = data.url.searchParams.get('currPage')

    let querySanitised:string = (query == null) ? "" : query
    let pageMaxSanitised:number = (pageMax == null) ? 1 : parseInt(pageMax)
    let currPageSanitised:number = (currPage == null) ? 1 : parseInt(currPage)

    if (currPageSanitised < pageMaxSanitised) currPageSanitised = 1
</script>


<div>
    <SearchComponent query={querySanitised} pageMax={pageMaxSanitised} currPage={currPageSanitised}/>
</div>


<style>
    div {
        padding-top: 15rem;
    }
</style>


