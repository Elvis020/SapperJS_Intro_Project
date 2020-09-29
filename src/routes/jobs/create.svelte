
<script>
    import {goto} from '@sapper/app';
    let title;
    let salary;
    let details;
    const submitForm = async() => {
        if(title && salary && details){
            const res = await fetch('jobs.json', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({title,salary,details})
            });
            const inData = await res.json();
            goto('jobs');
        }
    }
</script>




<style>
    /* your styles go here */
    h2 {
        text-align: center;
    }
    form {
        max-width: 360px;
        margin: 40px auto;
        text-align: center;
    }
    input,textarea{
        display: block;
        width: 100%;
        font-family: 'PT Sans', sans-serif;
        margin: 10px auto;
        padding: 10px;
        border: 1px solid rgb(134, 134, 134);
        border-radius: 8px;
    }

    input:focus,
    textarea:focus{
        outline: 0;
        border: 1px solid rgb(134, 134, 134);
    }
</style>





<h2>Add a New Job &#x1F468;&#x200D;&#x1F9B2;</h2>
<form on:submit|preventDefault={submitForm}>
    <input type="text" placeholder="Job Title" bind:value={title}  required>
    <input type="number" placeholder="Amount" bind:value={salary} required>
    <textarea placeholder="Job Details" bind:value={details} required></textarea>
    <button class="btn">Add New Job</button>
</form>