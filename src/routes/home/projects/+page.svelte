<script>
	import projects from '$lib/projects.js';
</script>

<sevlte:head>
	<title>Projects</title>
</sevlte:head>

<div class="container">
	{#each Object.entries(projects) as [title, project]}
		{#if !project.wip}
				<a href="projects/{title}" class="project">
					<div class="title">{project.name}</div>
					<img src={project.imgsrc} alt="" />
				</a>
		{/if}
	{/each}
</div>
  <div class="spacer" />
<style>
	img {
    grid-row: 2 / 3;
    height: 100%;
    width: 100%;
    margin: auto;
		z-index: 0;
		border: hsl(var(--core-purple)) 1px solid;
		object-position: top;
	}
	.container {
		display: flex;
		flex-wrap: wrap;
		width: 80%;
		height: 100%;
		margin: auto;
		justify-content: center;
		align-items: flex-start;
	}
	.project {
		width: 320px;
		height: 230px;
		margin: 20px;
    padding: 4px;
		display: grid;
    grid-template-rows: 30px 200px;
		text-shadow: 0px 1px 2px black;
		align-items: flex-start;
		justify-content: center;
		background-color: hsl(var(--dark-blue));
	}
	img:hover {
		background-color: hsl(var(--dark-blue));
		box-shadow: 0px 0px 3px 1px hsl(var(--core-purple));
	}
	.title {
		font-size: 2rem;
		font-weight: 700;
		text-align: center;
		z-index: 2;
	}

  .spacer{
    margin-top: 40vh;
  }
</style>
