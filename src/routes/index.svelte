<script>
	import Rain from '../components/Rain.svelte';
</script>

<sevlte:head>
	<title>Brandon Burge</title>
</sevlte:head>

<div class="wrapper">
	<div class="title">
		<h1 class="name">BRANDON BURGE</h1>
		<h2 class="dev">FULL STACK DEVELOPER</h2>
	</div>
	<nav>
		<a class="button" href="/about">ABOUT</a>
		<a class="button" href="/projects">PROJECTS</a>
	</nav>
	<Rain />
	<!-- <div class="lineContainer" bind:this={lineContainer}> -->
	<!-- 	<div class="line" bind:this={line} /> -->
	<!-- </div> -->
</div>

<style>
	.wrapper {
		display: grid;
		width: 100%;
		height: 100vh;
		grid-template-columns: minmax(5rem, 1fr) minmax(30rem, 4fr) minmax(30rem, 4fr) minmax(0, 1fr);
		grid-template-rows: 1fr 2.5fr 2.5fr 5fr 1fr;
	}

	.title {
		grid-column: 2 / 5;
		grid-row: 3 / 4;

		justify-content: flex-end;

		display: flex;
		flex-direction: column;
	}

	.name {
		font-weight: 600;
		letter-spacing: 0.2rem;
		font-size: 18rem;
		color: hsl(var(--light-purple));
	}

	.dev {
		text-shadow: -2px 2px 2px hsl(var(--core-purple)), 2px 2px 2px hsl(var(--core-purple)),
			2px -2px 2px hsl(var(--core-purple)), -2px -2px 2px hsl(var(--core-purple));
		font-size: 9rem;
		color: hsl(var(--dark-blue));
	}

	nav {
		grid-column: 2/ 4;
		grid-row: 4;
		width: 100%;
		justify-self: flex-start;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		max-height: 10rem;
		margin: 3rem 0rem;
	}

	.button {
		padding: 1rem;
		display: flex;
		flex: 1 1 8rem;
		max-width: 30rem;
		justify-content: center;
		align-items: center;
		border-radius: 0.3rem;
		margin: 1rem 4rem 1rem 0;
		font-size: 5rem;
		font-weight: 600;
		color: hsl(var(--dark-blue));
		background-color: hsl(var(--light-purple));
	}

	.lineContainer {
		grid-column: 2 / 4;
		grid-row: 3 / 4;
		display: grid;
	}

	.line {
		background-color: hsl(var(--core-purple));
		height: 2px;
		justify-self: flex-end;
		align-self: flex-start;
		overflow: hidden;
		max-width: 100%;
	}
</style>
