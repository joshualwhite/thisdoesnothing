<script lang="ts">
    import LinkButton from "./LinkButton.svelte";

    export let title: string;
    export let description: string;
    export let link: string;
    export let icon: string;
  </script>

  <div class="flex flex-col h-full rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 lg:p-6 p-4">
    <img src={icon} alt="{title} Icon" class="w-12 h-12" />
    <div class="flex-grow">
      <div class="font-bold text-xl mb-2">{title}</div>
      <p class="text-gray-700 text-base">
        {description}
      </p>
    </div>
    <div class="pt-4 pb-2">
        <LinkButton text="Learn More" href={link} additionalStyles={"mt-2"}></LinkButton>
    </div>
  </div>