<script lang="ts">
    import { page } from '$app/stores';
  
    export let href: string;
    export let name: string;
    let isCurrent = false;

    $: isCurrent = $page && $page.url.pathname === href;
  </script>
  
  <a
    href={href}
    class:text-secondary-700={isCurrent}
    class:text-primary-700={!isCurrent}
    class="px-3 py-2 rounded-md text-md font-bold transition hover:text-tertiary-500"
  >
    {name}
  </a>
  