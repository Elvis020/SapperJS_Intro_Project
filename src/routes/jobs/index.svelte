
<!-- The Script that runs on the server before the normal svelte script -->
<script context="module">
    // Fetching external data
    export async function preload(page, session){
        const result = await this.fetch('/jobs.json');
        const jobs = await result.json();

        return {jobs}
    }
</script>

<script>
    export let jobs;
    // console.log(jobs)
</script>

<style>
    ul {
        padding: 0;
    }

    li {
        list-style: none;
    }
    li a {
        display: block;
        padding:15px;
        border: 1px solid #f2f2f2;
        border-radius: 8px;
        margin: 10px auto;
        text-decoration: none;
    }
    li:hover {
        background: #fbfbfb;
    }
    div {
        text-align: center;
    }

</style>


<h2>All Current Jobs</h2>
<ul>
    {#each jobs as job}
        <li><a rel="prefetch" href={`jobs/${job.id}`}> {job.title} </a></li>
    {/each}
</ul>

<div>
    <a href="jobs/create" class="btn">Create New Job</a>
</div>