<script lang="ts">
    import type { LayoutData } from './$types';

    export let data: LayoutData;
</script>

<nav>
    <!--object data="$lib/images/Logo.svg" width="300" height="300" title="logo"> </object>-->
    <span>
        <a href="/">Home</a>
        <a href="/contact">Contact Us</a>
    </span>
    <span id="account">
        <a href="/login">Login</a>
        <a href="/signUp">Sign Up</a>
    </span>
</nav>

<slot></slot>

<!--footer-->
<footer>
    <p>Author: nya nya tuturu</p>
    <p><a href="deeznuts@example.com">deeznuts@example.com</a></p>
</footer>


<style>
    @font-face {
        font-family: "Poppins";
        src: url("$lib/Poppins-Regular.ttf");
    }

    @font-face {
        font-family: "Poppins";
        src: url("$lib/Poppins-Bold.ttf");
    }

    

    

    :global(body) {
        background: linear-gradient(#0F0C1D, #0B0621);
        min-height: 100vh;
    }

    * > a {
        font-family: 'Poppins';
        font-style: bold;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #FFFFFF;
        display: inline-block
    }

    nav:first-child {
        margin-right: auto;
    }

    nav:nth-child(1) {
        margin-left: auto;
    }

    nav {   
        width: 100%;
        background-color: #00864e;
    }

</style>