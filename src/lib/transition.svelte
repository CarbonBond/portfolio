<script lang="ts">
	import { fade } from 'svelte/transition';

	export let url: URL;
</script>

{#key url}
	<div transition:fade>
		<slot />
	</div>
{/key}
