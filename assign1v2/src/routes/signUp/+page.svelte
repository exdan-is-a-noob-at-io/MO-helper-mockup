<script lang="ts">
    // import type { PageData } from './$types';
    import { fly } from 'svelte/transition';
    import eyeIcon from "$lib/images/eye.svg";
    import eyeClosedIcon from "$lib/images/eyeClosed.svg";
    
    // export let data: PageData;

    let show_password = false;
    $: type = show_password ? 'text' : 'password';
    $: eyeState = show_password ? eyeIcon : eyeClosedIcon;

    function signUp() {
        alert("Thanks for signing up to deez nuts!");
    }
</script>

<main>
    <form on:submit|preventDefault={signUp} transition:fly="{{ y: 10, duration: 200 }}">
        <h1>Make Account ✨</h1>
        <div>
            <label for="username" class="textboxHeader">Username</label>
            <input type="text" name="username">
        </div>
        <div>
            <label for="email" class="textboxHeader">Email</label>
            <input type="email" name="email">
        </div>
        <div>
            <label for="password" class="textboxHeader">Password</label>
            <input type={type} name="password">
            <button on:click|preventDefault={() => show_password = !show_password}>
                <img src={eyeState} alt="Uncover password">
            </button>
        </div>
        <div>
            <input type="submit" value="Register">
        </div>
        <div>
            <span>
                Have an account?
                <a href="/login">Log In!</a>
            </span>
        </div>
    </form>
</main>

<style>
    main {
        min-height: 100vh;
        display: grid;
        place-items: center;
    }

    h1 {
        font-size: 2rem;
        margin-bottom: 4.32rem;
    }

    form {
        background: var(--primary-background-100);
        padding: 3.24rem 3.72rem;

        border: 2px solid var(--primary-color-700);
        border-radius: 12px;

        box-shadow: 6px -6px 12px 0px rgba(102, 51, 255, 0.25),
         0px 0px 64px 0px rgba(64, 0, 255, 0.25);
    }

    form > div {
        display: flex;
        flex-direction: column;
        margin-top: 3.3rem;
        position: relative;
    }

    form > div:first-of-type {
        margin-top: 0;
    }

    label {
        position: absolute;
        top: -1.8rem;
         color: var(--primary-color-800);
    }

    input:not([type=submit]) {
        background: var(--primary-background-400);
        border: none;
        outline: none;

        width: min(430px, 80vw);
        height: 2.64rem;
        border-radius: 8px;
        box-sizing: border-box;
        padding: 0 1rem;

        position: relative;
    }

    input[type=submit] {
        background: var(--primary-accent);
        border: none;
        outline: none;

        text-transform: uppercase;
        letter-spacing: 0.1rem;
        font-weight: bold;

        height: 2.64rem;
        border-radius: 8px;
        box-sizing: border-box;
        padding: 0 1rem;

        box-shadow: 0px 4px 0px 0px rgba(80, 32, 223, 1);
        transition: all 0.1s ease-in-out;

        cursor: pointer;
    }

    input[type=submit]:hover {
        box-shadow: 0px 2px 0px 0px rgba(80, 32, 223, 1);
        transform: translateY(2px);
    }

    input[type=submit]:active {
        box-shadow: 0px 0px 0px 0px rgba(80, 32, 223, 1);
        transform: translateY(4px);
        filter: brightness(80%) hue-rotate(-5deg);
    }

    input:not([type=submit]) + button {
        position: absolute;

        background: transparent;
        border: none;
        outline: none;
        
        right: 0;
        margin-right: 1rem;
        height: 100%;
        
        cursor: pointer;
    }   
    
    img {
        display: block;
    }
</style>
