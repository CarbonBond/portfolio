<script lang="ts">
	export let skill: any;
  export let name: any; 

	let open = false;
	let onclick = () => {
		if (open) {
			open = false;
		} else {
			open = true;
		}
	};
</script>

<div>
	<div class="item " id={name} on:click={onclick}>
		<div class="svg">
			{@html skill.svg}
		</div>
		<p>{skill.name}</p>
	</div>

	<div class:open class="container" on:click={onclick}>
		<div class="data">
			<h4>
				{skill.name}
			</h4>
			<p class="desc">{skill.desc}</p>
			<p class="use">{skill.use}</p>
		</div>
	</div>
</div>

<style>

	.item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;
    padding: 1em;
    background-color: none;
    transition: background-color 0.65s;
    border-radius: 10px;
  }
  .item:hover {
    background-color: hsl(var(--core-purple))
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
	.container {
		position: fixed;
		background-color: hsl(0, 0%, 0%, 0.6);
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: grid;
		justify-content: center;
		align-items: center;
		opacity: 0%;
		pointer-events: none;
	}

	.data {
		background-color: hsl(275, 80%, 30%);
		box-shadow: 0px 0px 18px hsl(275, 80%, 30%);
		border-radius: 10px;
		padding: 30px;
		width: 550px;
		display: flex;
		flex-direction: column;
		text-align: center;
		justify-content: center;
		align-items: center;
		font-weight: bold;
		max-width: 100vw;
	}

	h4 {
		margin-bottom: 1.2em;
		font-size: 3em;
		padding-bottom: solid 1px white;
	}

	.desc {
		font-size: 1.5em;
		margin-bottom: 2em;
	}

	.use {
		font-size: 1.5em;
		margin-bottom: 2em;
	}

	.open {
		pointer-events: all;
		opacity: 100%;
	}
	@media screen and (max-width: 500px) {
		.item {
			padding: 2rem 3rem;
		}
  }
</style>
