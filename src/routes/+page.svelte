<script>
	import Rain from '$lib/Rain.svelte';
	import { fade } from 'svelte/transition';
</script>

<sevlte:head>
	<title>Brandon Burge</title>
</sevlte:head>

<div class="wrapper" transition:fade>
	<div class="title">
		<h1 class="name">BRANDON BURGE</h1>
		<h2 class="dev">FULL STACK DEVELOPER</h2>
	</div>
	<nav class="nav">
		<a class="button" href="/home/about">Enter</a>
	</nav>
	<Rain minHeight={100} maxHeight={500} rainCounter={4} />
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
		font-size: 10rem;
		color: hsl(var(--light-purple));
	}

	.dev {
		text-shadow: -2px 2px 2px hsl(var(--core-purple)), 2px 2px 2px hsl(var(--core-purple)),
			2px -2px 2px hsl(var(--core-purple)), -2px -2px 2px hsl(var(--core-purple));
		font-size: 4rem;
		letter-spacing: 0.1rem;
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
		max-width: 20rem;
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
	.button:hover {
		background-color: hsl(var(--core-purple));
		box-shadow: 0 0 2px 1px hsl(var(--core-purple));
	}
	.button:active {
		background-color: hsl(var(--core-purple), 50%);
	}

  @media screen and (max-width:500px) {
    .title {
      grid-column: 2/3;
      grid-row: 2/4;
    }
    .title>h2{
      text-align: center;
    }
    .name {
      text-align: center;
      font-size: 6rem;
      margin-bottom: 4rem;
    }

    .nav{
      grid-column: 2/3;
      justify-content: center;
    }
  }
</style>
