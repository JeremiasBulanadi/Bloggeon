<script>
    import Profile from './Profile.svelte';
    import Blogs from './Blogs.svelte';

    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';

    import { signInWithPopup } from 'firebase/auth';
    import { auth, googleProvider } from './firebase';
    import { authState } from 'rxfire/auth';

    let user = authState(auth);

    let ready = false;

    function login() {
        signInWithPopup(auth, googleProvider);
    }

    onMount(() => ready = true);
</script>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>

<section>
    {#if $user}
        <Profile {...$user}/>
        <button class="button is-danger" on:click={ () => auth.signOut() }>Logout</button>
        <hr>
        <Blogs uid={$user.uid}/>
        
    {:else}
        {#if ready}
             <h1 class="title is-1" transition:fade="{{ delay: 500, duration: 1500 }}">Your own notetaking repository...</h1>
        {/if}
         <button class="button is-primary" on:click={login}>
            <strong>Sign In</strong>
         </button>
    {/if}
</section>