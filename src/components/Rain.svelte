<script lang="ts">
	import { onMount } from 'svelte';

	export let minHeight: number;
	export let maxHeight: number;
	export let rainCounter: number;
	let rainContainer: HTMLElement;

	onMount(() => {
		for (let i = 0; i < rainCounter; i++) {
			setTimeout(() => {
				createRainDrop(rainContainer, minHeight, maxHeight);
			}, Math.random() * 4000);
		}

		const createRainDrop = (node: HTMLElement, minHeight: number, maxHeight: number) => {
			if (!node) {
				return;
			}
			let rain = document.createElement('div');
			rain.classList.add('rain');
			rain.setAttribute(
				'style',
				` left:${Math.random() * node.offsetWidth}px;  height: ${Math.max(
					minHeight,
					Math.random() * maxHeight
				)}px; `
			);
			let prevTimeStamp: number;
			let x: number = 0 - maxHeight;
			node.appendChild(rain);

			let frame = requestAnimationFrame(loop);
			let speed = Math.max(30, Math.random() * 100);

			function loop(timestamp: number) {
				if (prevTimeStamp === undefined) {
					prevTimeStamp = timestamp;
				}

				const delta = 0.01 * (timestamp - prevTimeStamp);
				prevTimeStamp = timestamp;

				x += speed * delta;

				rain.style.transform = `translate(0,${x}px)`;

				if (x > node.offsetHeight) {
					cancelAnimationFrame(frame);
					node.removeChild(rain);
					createRainDrop(rainContainer, minHeight, maxHeight);
				} else {
					frame = requestAnimationFrame(loop);
				}
			}
		};
	});
</script>

<div class="rainContainer" bind:this={rainContainer} />

<style>
	.rainContainer {
		position: absolute;
		width: inherit;
		height: inherit;
		overflow: hidden;
		z-index: -1;
	}

	:global(.rain) {
		position: absolute;
		width: 2px;
		background: linear-gradient(
			0deg,
			hsl(var(--core-purple), 100%) 0%,
			hsl(var(--core-purple), 30%) 40%,
			hsl(var(--core-purple), 0%) 100%
		);
	}
</style>
