<script lang="ts">
	import '../../styles/global.css';
	import Header from '../../components/Header.svelte';
	import Rain from '../../components/Rain.svelte';
</script>

<Header />
<slot />

<div class="rainContainer">
	<Rain minHeight={100} maxHeight={500} rainCounter={4} />
</div>

<style>
	.rainContainer {
		position: absolute;
		width: 100%;
    height: 100%;
		top: 0;
		left: 0;
		z-index: -1;
	}
</style>
