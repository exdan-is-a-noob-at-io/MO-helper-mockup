<script lang="ts">
    //import type { LayoutData } from "./$types";
    import { goto } from "$app/navigation";
    import logo from "$lib/images/Logo.svg";

    //export let data: LayoutData;
    export const prerender = true;
</script>

<nav>
    <ul id="pages">
        <li>
            <a href="/">
                <img src={logo} alt="StackUnderflow"/>
            </a>            
        </li>
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/contact">Contact Us</a>
        </li>
    </ul>
    <ul id="account">
        <li>
            <a href="/login">Login</a>
        </li>
        <li>
            <button on:click={() => goto("/signUp")}>
                Sign Up
            </button>
        </li>
    </ul>
</nav>

<div class="main">
    <slot />
</div>

<footer>
    <ul>
        <li>
            <a href="/">
                <img src={logo} alt="StackUnderflow"/>
            </a>            
            <div>
                by monya~
            </div>
        </li>
        <li>
            <a href="/contact">
                Contact us
            </a>
        </li>
    </ul>
</footer>


<style>
    :global(body) {
        background: linear-gradient(#0F0C1D, #0B0621);
        min-height: 100vh;
    }

    :global(*) {
        --primary-color-900: #E7E6FB;
        --primary-color-800: #C2B0F7;
        --primary-color-700: #B09AEF;
        --primary-color-600: #6B3DB7;
        --primary-color-300: #534F7F;
        --primary-background-400: #291C51;
        --primary-background-300: #0B0621;
        --primary-background-200: #0F0C1D;
        --primary-background-100: #020007;
        --primary-accent: #8157FF;

        --primary-font: "Poppins";

        padding: 0;
        margin: 0;

        color: var(--primary-color-900);
        font-size: 1rem;

        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }

    @font-face {
        font-family: "Poppins";
        src: url("$lib/fonts/Poppins-Regular.ttf");
        font-weight: normal;
    }

    @font-face {
        font-family: "Poppins";
        src: url("$lib/fonts/Poppins-Bold.ttf");
        font-weight: bold;
    }

    a {
        font-weight: bold;
        line-height: 24px;
        text-decoration: none;
    }

    nav {
        position: absolute;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        left: 7.56rem;
        right: 7.56rem;
        top: 5.58rem;
        z-index: 100;
        font-family: var(--primary-font);
    }

    img {
        display: block;
    }

    ul {
        display:flex;
        flex-direction: row;
        align-items: center;
        gap: 1.44rem;
    }

    li {
        list-style: none;
    }

    button {
        border: 0;
        background: var(--primary-accent);
        border-radius: 8px;
        padding: 0.75rem 2.5rem;
        font-weight: bold;

        cursor: pointer;
        transition: all 0.1s ease-in-out;
        font-family: var(--primary-font);
    }

    button:hover {
        background: var(--primary-background-400);
    }

    footer {
        margin-top: 0.75rem;
        padding: 2.7rem 17.34rem 7.27rem 17.34rem;
        font-family: var(--primary-font);
        background: var(--primary-background-100);
    }

    footer > ul {
        justify-content: space-between;
    }
    
    footer > ul > li:first-of-type {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    footer > ul > li:first-of-type * {
        color: var(--primary-color-300);
    }

    .main {
        min-height: 100vh;
        font-family: var(--primary-font);
    }
</style>