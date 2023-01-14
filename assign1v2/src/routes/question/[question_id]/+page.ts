import type { PageLoad } from './$types';

export const load = (({ params }) => {
    return {
        questionId: params.question_id
    };
}) satisfies PageLoad;
