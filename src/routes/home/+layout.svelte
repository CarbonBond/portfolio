<script>
	import '../../styles/global.css';
	import Header from '$lib/Header.svelte';
	import Rain from '$lib/Rain.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<div class="main">
	<Header />
	<div class="middle">
		<slot />
	</div>
	<Footer />
</div>

<div class="rainContainer">
	<Rain minHeight={100} maxHeight={500} rainCounter={6} />
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

	.main {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.middle {
		flex: 1 1 auto;
	}
</style>
