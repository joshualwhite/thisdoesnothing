<script>
    import { beforeNavigate } from '$app/navigation';
	import { fly, fade } from 'svelte/transition';

    beforeNavigate(() => {
		drawerOpen = false;
	});

	let drawerOpen = false;

    const toggleDrawer = () => {
		if (event) {
			event.stopPropagation();
		}
        drawerOpen = drawerOpen ? false : true;
    }
	
	function clickOutside(node) {
		const handleClick = event => {
			if (node && !node.contains(event.target) && !event.defaultPrevented) {
				drawerOpen = false;
			}
		}

		window.addEventListener('click', handleClick);

		return {
			destroy() {
			window.removeEventListener('click', handleClick);
			}
		}
	}

</script>
  
<div class="bg-surface-900 w-full">

  <div class="h-16 flex justify-between items-end w-full py-2 px-4 md:hidden">
	<a href="/">
		<div class="flex items-start">
		<img src="/logo.svg" alt="Logo" class="h-8 mr-4" />
		<span class="text-white font-semibold">nothin'</span>
		</div>
	</a>
	<button on:click={toggleDrawer} on:keypress={toggleDrawer}>
		<img src="/menu.svg" alt="Menu Button" />
	  </button>
  </div>
  

	{#if drawerOpen}
		<div 
			use:clickOutside
			class="fixed top-0 left-0 bottom-0 w-[280px] md:w-[480px] bg-gray-800 z-50 overflow-x-hidden"
			in:fly={{ x: -100, duration: 300 }}
		>
			<div class="flex flex-col h-full justify-between">
				<div in:fade={{ duration: 300 }} class="flex flex-col justify-center items-center flex-grow">
					<a href="/" class="text-white px-4 py-4 rounded-md text-lg font-medium hover:bg-dark-700 transition">Home</a>
					<a href="/about" class="text-white px-4 py-4 rounded-md text-lg font-medium hover:bg-dark-700 transition">About</a>
					<a href="/pricing" class="text-white px-4 py-4 rounded-md text-lg font-medium hover:bg-dark-700 transition">Pricing</a>
					<a href="/contact" class="px-8 py-4 inline-block text-lg bg-white text-surface-900 font-bold rounded hover:bg-gray-200 transition">Contact</a>
				</div>
				<div class="p-4 flex justify-end">
					<button on:click={toggleDrawer}>
						<img src="/caret-left-arrows.svg" alt="Close Drawer" />
					</button>
				</div>
			</div>
		</div>
	{/if}

  <div class="hidden md:block">
	<nav class="h-16 flex justify-between items-center p-2 lg:px-10 w-full">
		<a href="/">
			<div class="flex items-start">
			<img src="/logo.svg" alt="Logo" class="h-8 mr-1" />
			<span class="text-white font-semibold">nothin'</span>
			</div>
		</a>
		<div class="flex items-center">
		  <a href="/about" class="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-dark-700 transition">About</a>
		  <!-- <a href="/snippets" class="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-dark-700 transition">Snippets</a> -->
		  <a href="/pricing" class="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-dark-700 transition">Pricing</a>	  
		  <a href="/chat" class="ml-4 inline-block bg-white text-dark-800 font-bold py-2 px-4 rounded hover:bg-gray-200 transition">Try it!</a>
		</div>
	  </nav>
  </div>
</div>