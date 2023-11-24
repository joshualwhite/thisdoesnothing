<script lang="ts">
    import { page } from '$app/stores';
    let isCurrent = false;

    $: isCurrent = $page && $page.url.pathname === href;
    export let href: string;
    export let name: string;
    let isOpen = false;

    function clickOutside(node: HTMLElement): { destroy: () => void } {
        const handleClick = (event: MouseEvent) => {
            if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
                isOpen = false;
            }
        };

        window.addEventListener('click', handleClick);

        return {
            destroy() {
                window.removeEventListener('click', handleClick);
            }
        };
    }
  </script>
  
  <div class="relative" use:clickOutside>
    <a 
        href={href} 
        on:click|preventDefault={() => isOpen = !isOpen}
        class:text-secondary-700={isCurrent}
        class:text-primary-700={!isCurrent}
        class="px-3 py-2 rounded-md text-md font-bold transition hover:text-tertiary-500"
    >{name}</a>
    {#if isOpen}
      <ul class="absolute group-hover:block bg-white shadow-md rounded mt-1 w-auto whitespace-nowrap">
        <li><a href="/fergus-falls" class="text-primary-700 text-md font-bold transition hover:text-tertiary-500 py-2 px-4 block">Fergus Falls, MN</a></li>
        <li><a href="/detroit-lakes" class="text-primary-700 text-md font-bold transition hover:text-tertiary-500 py-2 px-4 block">Detroit Lakes, MN</a></li>
        <li><a href="/devils-lake" class="text-primary-700 text-md font-bold transition hover:text-tertiary-500 py-2 px-4 block">Devils Lake, ND</a></li>
        <li><a href="/fargo" class="text-primary-700 text-md font-bold transition hover:text-tertiary-500 py-2 px-4 block">Fargo, ND</a></li>
      </ul>
    {/if}
  </div>
  