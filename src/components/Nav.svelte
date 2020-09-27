<script>
	export let segment;
	const handleClick = () => {
		console.log(segment);
	}
</script>

<style>
	nav {
		background: #fff3ef;
	}
	nav div{
		max-width: 960px;
		padding: 0 10px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(2,1fr);
		align-items: center;
	}

	h1 {
		margin-top: 10px;
		font-size: 22px;
		font-weight: bold;
	}

	ul {
		padding: 0;
		margin: 0;
		text-align: right;
	}

	h1 {
		cursor: pointer;
	}
	
	li {
		display: inline-block;
	}
	a{
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
		text-transform: capitalize;
	}
	/* a.current {
		border-top: 1px solid red;
	} */
	a.current {
		border-bottom: 3px solid #ff3e00;
		padding-top: -2px;
	}
</style>

<nav>
	<div>
		<h1 on:click={handleClick}>Job Ninja with Elvis</h1>
		<ul>
			<li><a class:current={segment === undefined} href=".">home</a></li>
			<li><a class:current={segment === 'about'} href="about">about</a></li>
			<li><a class:current={segment === 'contact'} href="contact">Contact</a></li>
	
			<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
				 the blog data when we hover over the link or tap it on a touchscreen -->
			<li><a rel="prefetch" class:current={segment === 'jobs'} href="jobs">Jobs</a></li>
		</ul>
	</div>
</nav>
