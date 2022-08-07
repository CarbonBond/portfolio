<script lang="ts">
	import skills from '../../lib/skills.js';
	import SkillMenu from '../../components/skill/SkillMenu.svelte';

	let skillData = {
		name: 'Typescript',
		svg: `
            <svg viewBox="0 0 128 128">
            <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path><path data-name="original" fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"></path>
            </svg>
          `,
		desc: 'An upgrade to Javascript. It adds type safety allowing for fast deevelopment with less bugs.',
    use: "A majority of my website use Typescript to incease development seed."
  };

  let open = false;
	let onclick = (e: any) => {
		let id = e.target.id;
		skillData = skills[id];
    open = true;
	};

</script>

<sevlte:head>
	<title>Skills</title>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
	/>
</sevlte:head>

<SkillMenu bind:open data={skillData} />

<div class="skill">
	{#each Object.entries(skills) as [name, skill]}
		<div class="item " id={name} on:click={onclick}>
			<div class="svg">
				{@html skill.svg}
			</div>
			<p>{skill.name}</p>
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

	.item:hover {
		cursor: pointer;
	}
	.item > * {
		pointer-events: none;
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
	@media screen and (max-width: 500px) {
		.item {
			padding: 2rem 3rem;
		}
		.skill {
			padding: 0 0;
		}
	}
</style>
