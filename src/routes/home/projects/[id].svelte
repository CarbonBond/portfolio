<script lang="ts">
	import { onMount } from 'svelte';
	import * as imProject from '../../../lib/projects.json';

	let projects: any = imProject;
	let project: {
		name: string;
		desc: string;
		iframe: Boolean;
		live: string;
		github: string;
		tools: string[];
	};
	onMount(() => {
		let pathname = window.location.pathname;
		let location: string = pathname.split('/')[3];
		project = projects[location];
	});
</script>

{#if project}
	<h2>{project.name}</h2>
	{#if project.iframe}
		<iframe src={project.live} title={projects.name} frameborder="0" />
	{/if}
	<div>
		<a href={project.github}>Github</a>
		<a href={project.live}>Live</a>
	</div>
	<p>{project.desc}</p>
	<div>
		{#each project.tools as tool}
			<div>{tool}</div>
		{/each}
	</div>
{/if}
