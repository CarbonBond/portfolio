<script lang="ts">
	import imProjects from '../../../lib/projects.js';
	let projects: any = imProjects;
</script>

<sevlte:head>
	<title>Projects</title>
</sevlte:head>

<div class="container">
	{#each Object.entries(projects) as [title, project]}
		<a href="projects/{title}" class="project">
			<div class="title">{project.name}</div>
			<div class="desc">
				{project.desc.substring(0, 100) + '...'}
			</div>
		</a>
	{/each}
</div>

<style>
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
		height: 150px;
		padding: 10px;
		margin: 25px;
		display: grid;
		align-items: center;
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
	}
</style>
