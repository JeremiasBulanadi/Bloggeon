<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function remove() {
        dispatch('remove', { id });
    }
    
    function toggleStatus() {
        let newStatus = !complete;
        dispatch('toggle', {
            id,
            newStatus
        });
    }

    export let id;
    export let title;
    export let text;
    export let complete;
</script>

<style>
    .is-complete {
        text-decoration: line-through;
        color: green;
    }
</style>

<li>

    <h5>{ title }</h5>
    <h6>{ text }</h6>
    
    <button on:click={remove}> 🗑 </button>
    
</li>