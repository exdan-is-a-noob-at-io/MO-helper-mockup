<script lang="ts">
    import type { PageData } from './$types';
    import { marked } from 'marked';
    import katex from 'katex';
    import hljs from 'highlight.js';

    marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: function (code, language) {
            if (language !== 'katex') {
                return code;
            }

            const mathcode = katex.renderToString(code, {
                    throwOnError: false,
                    displayMode: true,
                    output: 'html'
                });

            return mathcode;
        }
    });

    let content = "";
    // let toParse = '# Marked in Node.js\n\nRendered by **marked**.';
    let toParse = `Let  
\`\`\`katex  
a_1, a_2, \\dots, a_n  
\`\`\`  
be a sequence of real numbers, and let  
\`\`\`katex  
m  
\`\`\``;
    // let toParse = "Let $a_1, a_2, \\dots, a_n$ be a sequence of real numbers, and let $m$ be a fixed positive integer less than $n$. We say an index $k$ with $1\\le k\\le n$ is good if there exists some $\\ell$ with $1\\le \\ell \\le m$ such that $a_k+a_{k+1}+...+a_{k+\\ell-1}\\ge0$, where the indices are taken modulo $n$. Let $T$ be the set of all good indices. Prove that $\\sum\\limits_{k \\in T}a_k \\ge 0$."

    marked.parse(toParse, function (error, result) {
        content = result;
        console.log(content);
    });

    export let data: PageData;

    /**
     Let $a_1, a_2, \dots, a_n$ be a sequence of real numbers, and let $m$ be a fixed positive integer less than $n$. We say an index $k$ with $1\le k\le n$ is good if there exists some $\ell$ with $1\le \ell \le m$ such that $a_k+a_{k+1}+...+a_{k+\ell-1}\ge0$, where the indices are taken modulo $n$. Let $T$ be the set of all good indices. Prove that $\sum\limits_{k \in T}a_k \ge 0$. \\\\
\textit{Proposed by Mark Sellke}
    */
</script>

<h1>
    Note that this page is still under construction. The rest of this page is an attempt of using Katex with sveltekit and failing. 
</h1>

<h1>
    {data.questionId}
</h1>

<main>
    <article>
        {@html content}
    </article>
</main>


<!-- HAHA IM GONNA FETCH THE QUESTION FOR THIS (NOT) BECAUSE THIS IS A WIP PAGE and i dont wanna do the db 🙂 -->

<style>
    h1 {
        margin-top: 200px;
        font-size: 2rem;
    }

    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    article {
        max-width: 28.8rem;
    }       

    :global(code) {
        margin: 0;
    }

    :global(code > *) {
        display: inline;
        background: var(--primary-background-400);
        border: 1px solid var(--primary-color-600);

        padding: 1rem;
        margin: 0;
        border-radius: 8px;
    }

    :global(.katex-display) {
        margin: 0;
    }
</style>