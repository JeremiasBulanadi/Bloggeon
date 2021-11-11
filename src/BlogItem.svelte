<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

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

    let date = new Date(created);
    $: editDate = edited ? new Date(edited) : null;

</script>

<style>
    .card {
        max-width: 600px;
    }
    
</style>

<li>

    <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            { title }
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            { content }
            <br>
            <time class="is-size-7" datetime="{date.getFullYear()}-{date.getMonth()}-{date.getDate()}">{date.getHours()}:{date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes() } - {date.getDate()} {months[date.getMonth()]} {date.getFullYear()}</time>
            {#if edited}
            <br>
            <time class="is-size-7 has-text-grey-light" datetime="{editDate.getFullYear()}-{editDate.getMonth()}-{editDate.getDate()}">Edited {editDate.getHours()}:{editDate.getMinutes() < 10 ? "0" + editDate.getMinutes() : editDate.getMinutes() } - {editDate.getDate()} {months[editDate.getMonth()]} {editDate.getFullYear()}</time>     
            {/if}
          </div>
        </div>
        <footer class="card-footer">
          <a href="#" class="card-footer-item" on:click={edit}>Edit</a>
          <a href="#" class="card-footer-item" on:click={remove}>Delete</a>
        </footer>
    </div>    
    
</li>