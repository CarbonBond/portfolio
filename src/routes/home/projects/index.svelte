<script lang="ts">
	import imProjects from '../../../lib/projects.js';
	let projects: any = imProjects;
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
<h4>WIP</h4>
<div class="container">
	{#each Object.entries(projects) as [title, project]}
		{#if project.wip}
				<a href="projects/{title}" class="project">
					<div class="title">{project.name}</div>
					<img src={project.imgsrc} alt="" />
				</a>
		{/if}
	{/each}
</div>
<style>
  h4{
    width:100%;
    font-size: 4rem;
    text-align: center;
  }
	img {
		width: 100%;
		height: 100%;
		z-index: 0;
		object-fit: cover;
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
		width: 300px;
		height: 180px;
		margin: 25px;
		display: grid;
		text-shadow: 0px 1px 2px black;
		align-items: flex-start;
		justify-content: center;
		border: hsl(var(--core-purple)) 1px solid;
		background-color: hsl(var(--dark-blue));
	}
	.project:hover {
		background-color: hsl(var(--dark-blue));
		box-shadow: 0px 0px 3px 1px hsl(var(--core-purple));
	}
	.title {
		font-size: 2rem;
		font-weight: 700;
		text-align: center;
		z-index: 2;
	}
</style>
