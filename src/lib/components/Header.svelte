<script lang="ts">
    import { beforeNavigate } from '$app/navigation';
	import { fly, fade } from 'svelte/transition';
	import {onMount} from 'svelte';
    import NavLink from './NavLink.svelte';
    import MultiLink from './MultiLink.svelte';

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
	
	function clickOutside(node: HTMLElement) {
		const handleClick = (event: MouseEvent) => {
			if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
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
  
<div class="w-full z-50">
	<div class="bg-primary-500 fixed flex items-center justify-between w-full h-12 py-4 px-4 md:hidden z-50">
	<a href="/" class="flex flex-row items-center">
		<div class="flex items-center">
		<img src="/logo-white.svg" alt="Logo" class="h-10 mr-2" />
		<div class="text-lg text-white">Creel Bay Digital</div>
		</div>
	</a>
	<button on:click={toggleDrawer} on:keypress={toggleDrawer}>
		<img src="/menu.svg" alt="Menu Button" class="h-10"/>
	  </button>
  </div>
  
	{#if drawerOpen}
		<div 
			use:clickOutside
			class="fixed top-0 left-0 bottom-0 w-[280px] md:w-[480px] bg-primary-800 z-50 overflow-x-hidden"
			in:fly={{ x: -100, duration: 300 }}
		>
			<div class="flex flex-col h-full justify-between">
				<div in:fade={{ duration: 300 }} class="flex flex-col justify-center items-center flex-grow">
					<a href="/" class="text-white px-4 py-4 rounded-md text-lg font-medium hover:bg-dark-700 transition">Home</a>
					<a href="/about" class="text-white  px-4 py-4 rounded-md text-lg font-medium hover:bg-dark-700 transition">About</a>
					<a href="/web-development" class="text-white  px-4 py-4 rounded-md text-lg font-medium hover:bg-dark-700 transition">Website Development</a>
					<a href="/app-development" class="text-white  px-4 py-4 rounded-md text-lg font-medium hover:bg-dark-700 transition">App Development</a>
					<a href="/locations" class="text-white  px-4 py-4 rounded-md text-lg font-medium hover:bg-dark-700 transition">Locations</a>
					<a href="#contact" class="px-8 py-4 inline-block text-lg bg-white text-surface-900 font-bold rounded hover:bg-gray-200 transition">Contact</a>
				</div>
				<div class="p-4 flex justify-end">
					<button on:click={toggleDrawer}>
						<img src="/caret-left.svg" alt="Close Drawer" />
					</button>
				</div>
			</div>
		</div>
	{/if}

	<div class="hidden md:flex justify-center">
		<nav class="fixed h-10 top-4 left-1/2 transform -translate-x-1/2 z-50 flex justify-center items-center p-2 lg:px-10 bg-white bg-opacity-80 border border-primary-500 rounded-full shadow-lg">
			<div class="flex items-center gap-4">
				<a href="/" class="flex items-center">
				  <img src="/logo.svg" alt="Logo" class="h-8 mr-1" />
				</a>      
				<NavLink href="/about" name="About" />
				<MultiLink href="/regions" name="Locations" />
				<NavLink href="/web-development" name="Website Development" />
				<NavLink href="/app-development" name="Custom Apps" />
				<NavLink href="#contact" name="Contact" />
			</div>
		</nav>
	  </div>
</div>