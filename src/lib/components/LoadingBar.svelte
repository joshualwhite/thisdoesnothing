<script>
    import { tweened } from 'svelte/motion';
    import { linear } from 'svelte/easing';

    const width = tweened(0, {
        duration: 200,
        easing: linear
    });

    $: {
        width.set(0);
        width.set(100);
    }
</script>

<style>
    .loading-container {
        overflow: hidden;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
    }
</style>

<div class="loading-container">
    <div class="h-full bg-secondary-500" style="width: {$width}%"></div>
</div>