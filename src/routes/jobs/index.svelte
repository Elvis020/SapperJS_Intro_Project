
<!-- The Script that runs on the server before the normal svelte script -->
<script context="module">
    // Fetching external data
    export async function preload(pages, session){
        const result = await this.fetch('./jobs.json');
        const jobs = await result.json();

        return {jobs}
    }
</script>

<script>
    export let jobs;
    console.log(jobs)
</script>

<style>
    /* your styles go here */
</style>


<h2>All Current Jobs</h2>
<h3>
    {#each jobs as job}
        <li><a href="/"> {job.title} </a></li>
    {/each}
</h3>