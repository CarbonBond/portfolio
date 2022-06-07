<script lang="ts">
	import imProjects from '../../../lib/projects.js';
	let projects: any = imProjects;
</script>

<sevlte:head>
	<title>Projects</title>
</sevlte:head>

{#each Object.entries(projects) as [project]}
	<div><a href="projects/{project}">{project}</a></div>
{/each}

<style>
	div {
		margin: 10rem;
	}
</style>
