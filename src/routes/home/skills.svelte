<script lang="ts">
	import skills from '../../lib/skills.js';
	import Skill from '../../components/skill/Skill.svelte';
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
    <div class="margin">
      <Skill name={name} skill={skill} />
    </div>
	{/each}
</div>

<style>

  .margin {
    margin: 1em;
  }
	.skill {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0 15%;
	}
	@media screen and (max-width: 500px) {
		.skill {
			padding: 0 0;
		}
	}
</style>
