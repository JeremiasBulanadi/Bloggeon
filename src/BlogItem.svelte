<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function remove() {
        dispatch('remove', { id });
    }
    
    function edit() {
        dispatch('edit', { id });
    }

    export let id;
    export let title;
    export let content;
    export let created;
    export let edited;
</script>

<style>

</style>

<li>

    <h5>{ title }</h5>
    <h6>{ content }</h6>
    <h6>{ created }</h6>
    <h6>{ edited ?? '' }</h6>
    
    <button on:click={edit}> ✏️ </button>
    <button on:click={remove}> 🗑 </button>
    
</li>