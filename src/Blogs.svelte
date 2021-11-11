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
    let modalMode = 'add';
    let modalIsActive = false;
    let idToBeEdited;

    function toggleModal() {
        modalIsActive = !modalIsActive;
    }

    // Query requires an index
    const collectionRef = collection(db, 'blogs');
    const docQuery = query(collectionRef, where('uid', '==', uid), orderBy('created'));
    const blogs = collectionData(docQuery, {idField:'id'}).pipe(startWith([]));

    async function addBlog(event) {
        const { titleText, contentText } = event.detail;
        let timestamp = Date.now();
        await addDoc(collectionRef, {
            uid,
            title: titleText,
            content: contentText,
            created: timestamp
        })
    }

    function editModal(event) {
        const { id } = event.detail;
        idToBeEdited = id;
        modalMode = 'edit';
        toggleModal();
    }

    async function editBlog(event) {
        const { titleText, contentText } = event.detail;
        const timestamp = Date.now();
        console.log(`${idToBeEdited}\n${titleText}\n${contentText}\n${timestamp}`);
        await updateDoc(doc(db,'blogs', idToBeEdited), {
            title: titleText,
            content: contentText,
            edited: timestamp
        });
    }

    async function removeBlog(event) {
        const { id } = event.detail;
        console.log(`id of gonna be deleted: ${id}`);
        await deleteDoc(doc(db,'blogs', id));
    }

    // function modalFunc(event) {
    //     const { modalMode, titleText, contentText } = event.detail;
    //     console.log("id is " + titleText);
    //     if (modalMode === 'add') {
    //         addBlog(titleText, contentText);
    //     } else if (modalMode === 'edit') {
    //         editBlog(id ,titleText, contentText);
    //     } else {
    //         console.log("Something went horribly wrong...");
    //     }
    // }

</script>

<style>
    input { display: block }

</style>


{#if modalIsActive}
    <Modal isActive={modalIsActive} modalMode={modalMode} on:modalFunc={modalMode == 'add' ? addBlog : editBlog } on:toggle={toggleModal}/>
{/if}

<ul>
    {#each $blogs as blog}
        <BlogItem {...blog} on:remove={removeBlog} on:edit={editModal}/>
        <br/>
    {/each}    
</ul>


<button class="button is-info" on:click={() => {modalMode = 'add'; modalIsActive = true; console.log(modalIsActive);}}>
    <i class="fas fa-plus"></i><p>&nbsp New Blog</p>
</button>