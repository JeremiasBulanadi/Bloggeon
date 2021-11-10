<script>
    import BlogItem from './BlogItem.svelte';
    import { db } from './firebase';
    import { collectionData } from 'rxfire/firestore';
    import { startWith } from 'rxjs/operators';
    import { doc, setDoc, addDoc , updateDoc , deleteDoc , collection , query , where , orderBy } from 'firebase/firestore';

    // User ID passed from parent
    export let uid;

    console.log(uid);

    // Form Text
    let text = 'some task'

    // Query requires an index
    const collectionRef = collection(db, 'todos');

    const docQuery = query(collectionRef, where('uid', '==', uid), orderBy('created'));
    
    const todos = collectionData(docQuery, {idField:'id'}).pipe(startWith([]));

    async function add() {
        let timestamp = Date.now();
        await addDoc(collectionRef, { uid, text, complete: false, created: timestamp})
    }

    async function updateStatus(event) {
        const { id, newStatus } = event.detail;
        await updateDoc(doc(db,'todos', id), {
            complete: newStatus
        });
    }

    async function removeItem(event) {
        const { id } = event.detail;
        console.log(`id of gonna be deleted: ${id}`);
        await deleteDoc(doc(db,'todos', id));
    }

</script>

<style>
    input { display: block }
</style>

{(console.log($todos))}

{#each $todos as todo}
    <BlogItem {...todo} on:remove={removeItem} on:toggle={updateStatus}/>
    <br/>
{/each}

<ul>
    
</ul>

<input bind:value={text}>

<button on:click={add}>
    Add Task
</button>