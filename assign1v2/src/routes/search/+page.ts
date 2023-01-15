import type { PageLoad } from './$types';

export const load = (async ({url}) => {
    return {url};
}) satisfies PageLoad;

// export async function load({ params, url }) {
// console.log("load called")
//     let lang = url.searchParams.get('lang');
//     let q = url.searchParams.get('q');
//     return { lang, q };
// }