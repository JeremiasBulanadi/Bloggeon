<script>
    export let displayName;
    export let photoURL;
    export let uid;
    export let email;
</script>

<h3>
    Hello { displayName }
</h3>

<img src={ photoURL } width="100" alt="user avatar">

<p>
    { email }
</p>