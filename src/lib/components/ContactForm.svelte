<script>
import { page } from '$app/stores';
import { onMount } from 'svelte';

let success = false;

// Use $page.url to reactively access the current URL
$: currentUrl = $page.url.href;

onMount(() => {
    const searchParams = Object.fromEntries(new URLSearchParams($page.url.search));
    success = searchParams.contact_success === 'true';
});
</script>

  
  <div class="flex flex-col items-center justify-center">       
      {#if success}
        <div class="w-full max-w-2xl bg-green-500 text-white p-4 rounded-lg mb-4 flex flex-row flex-wrap-nowrap">
          <img src="/plane.svg" alt="Send Icon" class="mr-4 h-6 w-6" />
          Your message has been sent successfully!
        </div>
      {/if}
        <h3 class="text-2xl text-white font-bold"> Get In Touch </h3>
      <div class="w-full max-w-2xl">    
          <form action="https://api.staticforms.xyz/submit" method="post" class="bg-dark-800 rounded">
          <input type="hidden" name="accessKey" value="e08863f2-d391-46bc-952e-6a917980eb10"> 
          <input type="text" name="honeypot" style="display: none;">
          
          <div class="mb-2">
              <label class="block text-white text-md font-bold mb-2" for="name">
              Name
              </label>
              <input class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="name" placeholder="Your Name">
          </div>
      
          <div class="mb-2">
              <label class="block text-white text-md font-bold mb-2" for="subject">
              Subject
              </label>
              <input class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="subject" placeholder="Subject">
          </div>
      
          <div class="mb-2">
              <label class="block text-white text-md font-bold mb-2" for="email">
              Email
              </label>
              <input class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" placeholder="youremail@example.com">
          </div>
      
          <div class="mb-4">
              <label class="block text-white text-md font-bold mb-2" for="message">
              Message
              </label>
              <textarea rows="4" class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="message" placeholder="Your message..."></textarea>
          </div>
      
          <div class="flex items-center justify-between">
              <input type="hidden" name="replyTo" value="@"> 
              <input type="hidden" name="redirectTo" value="{currentUrl}/?contact_success=true"> 
              <button type="submit" class="inline-flex items-center bg-tertiary-500 text-white font-bold py-2 px-4 rounded hover:bg-secondary-600 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-opacity-50 transition ease-in-out duration-150">
                  Submit
                  <img src="/plane.svg" alt="Send Icon" class="ml-2 h-4 w-4" />
              </button>
          </div>
          </form>
      </div>
  </div>