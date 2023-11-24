<script>
    import ContactForm from "$lib/components/ContactForm.svelte";

  let currentYear = new Date().getFullYear();

</script>

<section class="self-start mt-auto pt-20 pb-20 pl-10 pr-10 bg-primary-700" id="contact">
    <ContactForm />
</section>


<footer class="w-screen bg-primary-900 px-4 lg:py-10 py-6">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 text-center md:text-left">
      <!-- Logo and Copyright -->
      <div class="flex flex-col items-center md:items-start justify-center">
        <img src="/logo-white.svg" alt="Creel Bay Digital Logo" class="h-8 w-auto mb-2" />
        <p class="text-gray-200 text-sm">&copy; Creel Bay Digital {currentYear}</p>
      </div>
      <!-- First List of Links -->
      <div class="text-gray-200">
        <h3 class="font-bold mb-2">Services</h3>
        <ul>
          <li><a href="/web-development" class="hover:text-gray-300 transition-colors py-2">Website Development</a></li>
          <li><a href="/app-development" class="hover:text-gray-300 transition-colors py-2">Application Development</a></li>
          <li><a href="/consulting" class="hover:text-gray-300 transition-colors py-2">Technology Consulting</a></li>
        </ul>
      </div>
            
      <!-- Second List of Links -->
      <div class="text-gray-200">
        <h3 class="font-bold mb-2">Locations</h3>
        <ul>
            <li><a href="/fergus-falls" class="hover:text-gray-300 transition-colors py-2">Fergus Falls, MN</a></li>
            <li><a href="/detroit-lakes" class="hover:text-gray-300 transition-colors py-2">Detroit Lakes, MN</a></li>
            <li><a href="/devils-lake" class="hover:text-gray-300 transition-colors py-2">Devils Lake, ND</a></li>
            <li><a href="/fargo" class="hover:text-gray-300 transition-colors py-2">Fargo, ND</a></li>
        </ul>
      </div>
      <!-- Third List of Links -->
      <div class="text-gray-200">
        <h3 class="font-bold mb-2">Company</h3>
        <ul>
          <li><a href="/about" class="hover:text-gray-300 transition-colors py-2">About Us</a></li>
          <li><a href="/#contact" class="hover:text-gray-300 transition-colors py-2">Contact</a></li>
          <li><a href="/" class="hover:text-gray-300 transition-colors py-2">Pay Your Bill</a></li>
        </ul>
      </div>
    </div>
  </footer>

