<style>
	h1, p{
		text-align: center;
		margin: 0 auto;
	}
	h1 {
		font-size: 2em;
		font-weight: 600;
		text-transform: uppercase;
		margin: 0 0 .5em 0;
	}

	img{
		width: 200px;
		margin: 0 auto;
		display: block;
	}

	a{
		margin-top: 40px;
	}
	div{
		margin-top: 60px;
		text-align: center;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Job Ninja</title>
</svelte:head>

<div>
	<img src="user-tie.svg" alt="">
	<h1>Great success!</h1>
	<p>
		Let do something gr8 with Sapper &#x1F970;
		Find your next assignment here! 
	</p>
	<a class="btn" href="jobs">View Jobs</a>
</div>

