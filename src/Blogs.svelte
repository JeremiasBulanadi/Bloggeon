<script>
    import BlogItem from './BlogItem.svelte';
    import Modal from './Modal.svelte';
    import { db } from './firebase';
    import { collectionData } from 'rxfire/firestore';
    import { startWith } from 'rxjs/operators';
    import { doc, setDoc, addDoc , updateDoc , deleteDoc , collection , query , where , orderBy } from 'firebase/firestore';

    // User ID passed from parent
    export let uid;

    console.log(uid);

    // Form Text
    let text = 'some task'

    // Modals shown
    let addModal = false;
    let editModal = false;

    // Query requires an index
    const collectionRef = collection(db, 'todos');

    const docQuery = query(collectionRef, where('uid', '==', uid), orderBy('created'));
    
    const todos = collectionData(docQuery, {idField:'id'}).pipe(startWith([]));

    async function addBlog(titleText, contentText) {
        let timestamp = Date.now();
        await addDoc(collectionRef, { uid, titleText, contentText, created: timestamp})
    }

    async function updateBlog(event) {
        const { id , titleText, contentText } = event.detail;
        const timestamp = Date.now();
        await updateDoc(doc(db,'blogs', id), {
            title: titleText,
            content: contentText,
            edited: timestamp
        });
    }

    async function removeItem(event) {
        const { id } = event.detail;
        console.log(`id of gonna be deleted: ${id}`);
        await deleteDoc(doc(db,'todos', id));
    }

    function modalFunc(event) {
        const { modalMode, titleText, contentText } = event.detail;
        if (modalMode === 'add') {
            addBlog(titleText, contentText);
        } else if (modalMode === 'edit') {
            editBlog(titleText, contentText);
        } else {
            console.log("Something went horribly wrong...");
        }
    }

</script>

<style>
    input { display: block }

</style>

{(console.log($todos))}


    <Modal isActive={true} modalMode={"add"} on:modalFunc={modalFunc}/>

    <div class="modal {addModal === true ? 'is-active' : ''}">
        <div class="modal-background"></div>
            <div class="modal-content">
                <div class="card">
                    <div class="card-content">
                      <div class="content">
                        Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
                      </div>
                    </div>
                 </div>
            </div>
        <button class="modal-close is-large" aria-label="close" on:click={() => addModal = false}></button>
    </div>


    <div class="modal {editModal === true ? 'is-active' : ''}">
        <div class="modal-background"></div>
            <div class="modal-content">
                <!-- Any other Bulma elements you want -->
            </div>
        <button class="modal-close is-large" aria-label="close" on:click={() => editModal = false}></button>
    </div>


{#each $todos as todo}
    <BlogItem {...todo} on:remove={removeItem} on:toggle={updateStatus}/>
    <br/>
{/each}

<ul>
    
</ul>

<input bind:value={text}>

<button on:click={addBlog}>
    Add Task
</button>