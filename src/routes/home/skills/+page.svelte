<script>
	import skills from '$lib/skills.js';
	import Skill from '$lib/Skill.svelte';
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
      <Skill name={name} skill={skill} />
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

	.skill {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0 15%;
	}
  @media screen and (max-width: 500px) {
    .item{
      padding: 2rem 3rem;
    }
    .skill{
      padding: 0 0;
    }
  }
</style>
