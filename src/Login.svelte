<script>
    import Profile from './Profile.svelte';
    import Blogs from './Blogs.svelte';

    import { signInWithPopup } from 'firebase/auth';
    import { auth, googleProvider } from './firebase';
    import { authState } from 'rxfire/auth';

    let user = authState(auth);

    function login() {
        signInWithPopup(auth, googleProvider);
    }

</script>

<section>
    {#if $user}
        <Profile {...$user}/>
        <button on:click={ () => auth.signOut() }>Logout</button>
        <hr>
        
        {(console.log($user.uid))}
        <Blogs uid={$user.uid}/>
        
    {:else}
         <button on:click={login}>
             Google Sign-In
         </button>
    {/if}
</section>