<!-- The Script that runs on the server before the normal svelte script -->
<script context="module">
    // Fetching external data
    export async function preload(page, session){
        const {id} = page.params;
        // Waiting for route parameter
        const response = await this.fetch(`jobs/${id}.json`)
        
        
        
        if(response.status === 200) {
            const job = await response.json();
            return {job}
        }

        if(response.status === 404){
            const { error } = await response.json(); 
            this.error(404, error)
        }
    }
</script>



<script>
    export let job;
    // console.log(job);
</script>

<div class="job">
    <h2> {job.title} </h2>
    <p> Salary of ${job.salary} </p>
    <h3>Job Details</h3>
    <p> {job.details} </p>
</div>


<style>
    main {
        margin: 0 auto;
    }

    h3 {
        text-decoration: underline;
        text-align: center;
    }
</style>