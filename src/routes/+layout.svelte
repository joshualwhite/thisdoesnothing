<script>
	import '../app.postcss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import LoadingBar from '$lib/components/LoadingBar.svelte'
	import { navigating } from '$app/stores'

</script>

<div>
	<Header />
	<main>
	  {#if $navigating}
        <LoadingBar />
      {:else}
        <slot />
      {/if}
	</main>
	<Footer />
</div>