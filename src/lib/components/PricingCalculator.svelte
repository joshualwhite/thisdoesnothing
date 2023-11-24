<script>  
    let basePrice = 600;
    let additionalCostPerPage = 300;
    let numberOfPages = 1;
    let isOpen = false;
    let totalPrice = basePrice; 
    let pages = Array.from({ length: 12 }, (_, i) => i + 1);

    $: totalPrice = basePrice + (numberOfPages - 1) * additionalCostPerPage; // Update total price reactively
  
    function toggleDropdown() {
      isOpen = !isOpen;
    }
  </script>
  
  <div class="max-w-md mx-auto my-8 p-4 bg-white shadow-lg rounded-lg text-center">
    <button on:click={toggleDropdown} class="w-full text-left flex justify-between items-center ">
      <span class="text-lg ">Pricing Calculator</span>
      <img src={isOpen ? '/caret-up.svg' : './caret-down.svg'} alt="Toggle Dropdown" class="transition-transform transform" style:rotate={isOpen ? '180deg' : '0deg'} />
    </button>
    {#if isOpen}
      <div class="mt-4">
        <label for="pages" class="block text-sm font-medium text-gray-700 mb-1">Number of Pages:</label>
        <select id="pages" class="mb-4 p-2 border border-gray-300 rounded-md w-full" bind:value={numberOfPages}>
            {#each pages as page}
              <option value={page}>{page}</option>
            {/each}
          </select>
        <div class="text-lg font-bold mb-4">Estimated Price: ${totalPrice}</div>
        <p class="text-xs text-gray-500">*This is an estimate and not a contractual offer.</p>
      </div>
    {/if}
  </div>
  