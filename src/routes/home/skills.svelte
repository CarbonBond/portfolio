<script lang="ts">
	import skills from '../../lib/skills.js';
</script>

<sevlte:head>
	<title>Skills</title>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
	/>
</sevlte:head>

<div class="skill">
	{#each Object.entries(skills) as [name, skill]}
		<div class="item ">
			<div class="svg">
				{@html skill.svg}
			</div>
			<p>{name}</p>
		</div>
	{/each}
</div>

<style>
	.item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;
		padding: 2rem 4rem;
	}

	.svg {
		font-size: 8rem;
		height: 10rem;
		width: 10rem;
		text-align: center;
	}

	.item div {
		font-size: 8rem;
		height: 10rem;
		width: 10rem;
		text-align: center;
	}

	.item p {
		font-size: 2.2rem;
		font-weight: 600;
	}

	.skill {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0 15%;
	}
</style>
