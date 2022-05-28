<script>
	import logo from '../lib/favicon.ico';
</script>

<div class="header">
	<nav>
		<a href="/" class="logoContainer"><img class="logo" src={logo} alt="Logo" /></a>
		<div class="linkContainer">
			<a href="/home/about" class="link">About</a>
			<a href="/home/projects" class="link">Projects</a>
			<a href="/home/skills" class="link">Skills</a>
		</div>
	</nav>
</div>

<style>
	.header {
		height: 15rem;
	}
	.header > nav {
		display: grid;
		padding: 2rem;
		grid-auto-flow: column;
		height: 10rem;
		justify-content: center;
		align-items: center;
		grid-template-columns: minmax(10rem, 1fr) 2fr minmax(10rem, 1fr);
	}

	.logoContainer {
		grid-column: 1 / 2;
		max-width: 10rem;
		height: 10rem;
		display: flex;
	}

	.logo {
		object-fit: contain;
	}

	.linkContainer {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		grid-column: 2/3;
	}

	.link {
		max-width: 15rem;
		width: 10rem;
		flex: 1 0 10rem;
		margin: 0.5rem 3rem;

		text-align: center;

		padding: 0.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 2rem;
		font-weight: 600;
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
