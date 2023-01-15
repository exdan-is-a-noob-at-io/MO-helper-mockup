<script lang="ts">
    // import type { PageData } from './$types';
    import send from "$lib/images/send.svg";
    import { fly } from 'svelte/transition';

    function submit() {
        alert("Thanks for the feedback!");
    }
</script>

<main transition:fly="{{ y: 10, duration: 200 }}">
    <form on:submit|preventDefault={submit}>
        <div>
            <h1>Have a Suggestion?</h1>
            <p>Let us Know!</p>
        </div>
        <div>
            <label for="name" class="textboxHeader">Name</label>
            <input type="text" name="name">
        </div>
        <div>
            <label for="email" class="textboxHeader">Email</label>
            <input type="email" name="email">
        </div>
        <div>
            <label for="message" class="textboxHeader">Message</label>
            <textarea name="message"></textarea>
            <!-- <input type="text" name="message" aria-multiline="true"> -->
        </div>
        <div>
            <input type="submit" value="Send    ">
            <img alt="Send icon" src={send} />
        </div>
    </form>
</main>

<style>
    main {
        min-height: calc(100vh - 10.5rem);
        padding-top: 10.5rem;
        display: grid;
        place-items: center;
    }

    h1 {
        font-size: 2rem;
        font-style: bold;
    }

    p {
        color: var(--primary-color-900);
    }

    form > div:not(:last-of-type) {
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
        left: 0.08rem;
        color: var(--primary-color-800);
        font-size: 0.84rem;
    }

    input:not([type=submit]) {
        background: var(--primary-background-100);

        width: 304px;
        height: 2.64rem;
        border-radius: 8px;
        box-sizing: border-box;
        padding: 0 1rem;

        color: var(--primary-background-900);
        border: 2px solid #7671B0;
        box-shadow: inset 0px -4px 4px #1A132C;

        position: relative;
        word-break: break-word;
    }

    textarea {
        background: var(--primary-background-100);

        width: 551px;
        height: 212px;
        box-sizing: border-box;
        padding: 10px 1rem;
        resize: none;

        background: var(--primary-background-100);
        border: 2px solid #7671B0;
        box-shadow: inset 0px -4px 4px #1A132C;
        border-radius: 8px;

        position: relative;
    }

    form > div:last-of-type {
        position: relative;
        display: block;
        width: fit-content;
        margin-top: 2rem;
        margin-left: auto;
    }

    form > div:last-of-type img {
        position: absolute;
        height:100%;
        width:16px;
        display: block;
        right: 1.6rem;
        top: 0;
    }

    input[type=submit] {
        background: var(--primary-accent);
        border: none;
        outline: none;

        width: 158px;
        height: 49px;

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

    form > div:last-of-type:hover {
        box-shadow: 0px 2px 0px 0px rgba(80, 32, 223, 1);
        transform: translateY(2px);
    }

    form > div:last-of-type:active {
        box-shadow: 0px 0px 0px 0px rgba(80, 32, 223, 1);
        transform: translateY(4px);
        filter: brightness(80%) hue-rotate(-5deg);
    }
</style>
