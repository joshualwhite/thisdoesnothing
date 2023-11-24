<script lang="ts">
    import LinkButton from "./LinkButton.svelte";

    export let title: string;
    export let subtitle: string;
    export let price: string;
    export let features: string[] = [];
    export let icon = '/check-mark.svg';
    export let hosting: string | undefined;
  </script>
  
  <div class="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between items-center text-center">
    <div>
        <h3 class="text-2xl font-bold">{title}</h3>
        <p class="text-gray-600">{subtitle}</p>
        <p class="text-3xl font-bold my-4">
            {price}
            {#if hosting}<span class="text-base font-normal block">+ {hosting} / month (hosting)</span>{/if}
          </p>
          <ul class="w-full text-left">
            {#each features as feature}
              <li class="flex items-center my-2">
                <img src={icon} alt="Check" class="inline-block h-6 w-6 mr-2" />
                {feature}
              </li>
            {/each}
          </ul>
    </div>
    <LinkButton href="#contact" text="Get Started" additionalStyles="mt-4"/>
  </div>
  