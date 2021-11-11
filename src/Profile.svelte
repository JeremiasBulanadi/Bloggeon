<script>
    export let displayName;
    export let photoURL;
    export let uid;
    export let email;
</script>

<style>
    .profile {
        display: flex;
    }

    .userIcon {
        border-radius: 100px;
        box-shadow: 100px;
    }

    .credentials {
        flex-direction: column;
        justify-content: center;
        display: flex;
    }
    
    .divider {
        width: 30px;
    }
</style>

<div class="profile">
    <img class="userIcon" src={ photoURL } width="150" alt="user avatar">
    <div class="divider"></div>
    <div class="credentials">
        <h4>
            Hello there
        </h4>
        <h3>{ displayName }</h3>
        <p class="is-size-7">
            { email }
        </p>
    </div>


</div>
