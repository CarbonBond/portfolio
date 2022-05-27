<script>
	import logo from '../lib/favicon.ico';
</script>

<div class="header">
	<a href="/" class="logoContainer"><img class="logo" src={logo} alt="Logo" /></a>
	<nav>
		<a href="/home/about" class="link">About</a>
		<a href="/home/projects" class="link">Projects</a>
		<a href="/home/skills" class="link">Skills</a>
	</nav>
</div>

<style>
	.header {
		height: 15rem;
	}
	.header > nav {
		display: flex;
		flex-wrap: wrap;
		height: 10rem;
		padding: 3rem 13rem;
		justify-content: center;
		align-items: center;
	}

	.logoContainer {
		position: absolute;
		left: 3rem;
		top: 3rem;
		max-width: 10rem;
		height: 10rem;
		display: flex;
	}

	.logo {
		object-fit: contain;
	}

	.link {
		max-width: 15rem;
		flex: 1 0 10rem;
		margin: 1rem 3rem;

		text-align: center;

		padding: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 0.3rem;
		font-size: 2.5rem;
		font-weight: 600;
		box-shadow: 0 0 2px 1px hsl(var(--light-purple));
		background-color: hsl(var(--dark-blue));
		color: hsl(var(--light-purple));
		transition: background-color 0.65s, box-shadow 0.75s;
	}
	.link:hover {
		background-color: hsl(var(--core-purple));
		box-shadow: 0 0 2px 1px hsl(var(--core-purple));
	}
	.link:active {
		background-color: hsl(var(--core-purple), 50%);
	}
</style>
