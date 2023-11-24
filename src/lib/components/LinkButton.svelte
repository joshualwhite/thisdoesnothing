<script lang="ts">
    export let href: string;
    export let text: string;

    export let additionalStyles: string | undefined;
</script>

<a
    href={href}
    class={`xl:mx-4 bg-tertiary-600 text-lg font-bold text-white py-2 px-3 lg:py-3 lg:px-6 rounded-md hover:bg-primary-700 transition duration-300 ${additionalStyles ? additionalStyles : ''}`}
    >
    {text}
</a>