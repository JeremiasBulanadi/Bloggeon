<script>

    export let isActive = false;
    export let modalMode; // Should only either be 'add' or 'edit'

    export let titleText = '';
    export let contentText = '';

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function modalFunc() {
        dispatch('modalFunc', { modalMode, titleText, contentText });
        isActive = !isActive;
    }

</script>


<style>
    
</style>

<div class="modal {isActive ? 'is-active' : ''}">
    <div class="modal-background"></div>
        <div class="modal-content">

            <div class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    {modalMode === "add" ? "Add" : "Edit" } Blog...
                  </p>
                  <button class="card-header-icon" aria-label="more options" on:click={() => isActive = !isActive}>
                    <span class="icon">
                        <i class="fas fa-times"></i>
                    </span>
                  </button>
                </header>
                <div class="card-content">
                  <div class="content">
                    <h5 class="title is-5">Title</h5>
                    <input class="input is-normal" type="text" placeholder="Something attention grabbing..." bind:value={titleText}>
                    <br>
                    <br>
                    <h5 class="title is-5">Content</h5>
                    <textarea class="textarea" placeholder="e.g. Hello world" bind:value={contentText}></textarea>
                  </div>
                </div>
                <footer class="card-footer">
                  <a href="#" class="card-footer-item" on:click={modalFunc}>Save</a>
                  <a href="#" class="card-footer-item" on:click={() => isActive = !isActive}>Cancel</a>
                </footer>
            </div>

        </div>
    <button class="modal-close is-large" aria-label="close" on:click={() => isActive = !isActive}></button>
</div>

