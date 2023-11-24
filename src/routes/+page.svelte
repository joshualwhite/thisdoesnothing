<script>
    import ServiceCard from "$lib/components/ServiceCard.svelte";
    import PricingCard from '$lib/components/PricingCard.svelte';
    import PricingCalculator from '$lib/components/PricingCalculator.svelte';
</script>

<section class="h-screen w-screen bg-no-repeat bg-cover bg-center relative" 
        style="background-image: url('/landing-2.jpg');">
    <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-secondary-500 to-primary-500 opacity-60"></div>

    <div class="relative p-6 flex flex-col justify-center items-center h-full w-full z-10 text-center  mx-auto max-w-6xl"> 
        <h2 class="text-4xl md:text-4xl xl:text-6xl font-bold mb-6 text-white py-2 px-2">You deserve a website that works as hard as you do.</h2>
        <p class="text-xl md:text-2xl mb-4 text-white py-2 px-2">We know small business, and we'd love to know you. We've been building reliable websites, apps & other solutions for small & medium sized businesses for 5+ years.</p>
        <div class="flex flex-row justify-center mx-8 mt-8">
            <a href="#contact" class="mx-2 xl:mx-4 bg-tertiary-600 text-lg font-bold text-white py-2 px-4 lg:py-4 lg:px-8 rounded-lg hover:bg-primary-700 transition duration-300">About Us</a>
            <a href="#contact" class="mx-2 xl:mx-4 bg-tertiary-600 text-lg font-bold text-white py-2 px-4 lg:py-4 lg:px-8 rounded-lg hover:bg-primary-700 transition duration-300">Get in Touch</a>
        </div>
    </div>
</section>


<section class="py-16 bg-surface-300 mx-auto w-full">
    <div class="flex flex-col justify-center items-center px-6 mx-auto max-w-6xl">
        <h1 class="text-4xl lg:text-5xl font-bold text-left text-primary-700 mb-6">
            Expert web development tailored to help you grow your business.
        </h1>
        <p class="text-xl text-primary-700 text-left mb-8">
            With over five years of web design & application development experience, we would love to help you take your business to the next level.
        </p>
        <div class="grid md:grid-cols-3 gap-4 lg:gap-6 py-4 lg:py-6 w-full">
            <ServiceCard
                title="Website Development"
                description="Efficient and targeted single-page websites tailored for quick campaigns or portfolios."
                link="web-development"
                icon="/devices.svg"
            />
            <ServiceCard
                title="Ecommerce Sites"
                description="Custom-crafted website solutions for small businesses looking to make a big impact online."
                link="web-development/#ecommerce"
                icon="/store.svg"
            />
            <ServiceCard
                title="Custom App Development"
                description="We have years of app development experience. Our team members have worked at local startups, enterprises, and Silicon Valley companies."
                link="custom-apps"
                icon="/code-file.svg"
            />
        </div>
    </div>
</section>

<section class="py-16 bg-primary-900">
    <div class="flex flex-col items-center justify-center w-full px-6 mx-auto max-w-6xl">
        <h3 class="text-2xl lg:text-3xl font-bold text-left text-white mt-6 mb-6">
            Why invest in a website? 
        </h3>
        <p class="text-xl text-white text-left mb-6 lg:mb-12">
            In today's world, a website does more than just show your business online. It's a key tool that helps your business grow. A website lets customers quickly find what they need to know about your business. It builds trust by transparently sharing, your menu, or the products and services you offer.
        </p>
        <div class="bg-primary-500 max-w-3xl rounded-md lg:p-8 p-4 relative">
            <img src="/quote.svg" alt="Quote" class="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2 h-12 w-12" />
            <blockquote class="text-white text-lg italic">
                “Since launching our new website, we've seen a significant increase in customer engagement. Our online orders have doubled, and customer feedback has been overwhelmingly positive. A game-changer for our business!”
                <span class="block font-bold text-white">- Alex Johnson, Owner, The Midwest Diner</span>
            </blockquote>
        </div>
    </div>
</section>


<section class="py-16 bg-surface-400 px-2">
    <div class="flex flex-col items-center justify-center w-full px-6 ">
        <h2 class="text-2xl lg:text-3xl font-bold text-center text-primary-700 mb-12">
            Estimated Pricing
        </h2>
        <div class="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        <PricingCard
            title="One-Page Website"
            subtitle="Ideal for side hustles + restaurants"
            price="$600"
            hosting="$20"
            features={['Responsive Design', 'Search Engine Optimization', 'Secure Hosting', 'Admin Portal']}
        />
        <PricingCard
            title="Small Business Website"
            subtitle="Perfect for growing businesses"
            price="$1,500"
            hosting="$25"
            features={['Custom Design', '4 Page Site', 'Simple Analytics', 'Social Media Integrations', '+ All in One-Page']}
        />
        <PricingCard
            title="Enterprise / E-commerce"
            subtitle="Adaptable for your needs"
            price="Custom Pricing"
            hosting={undefined}
            features={['Custom Development', 'Advanced Analytics', 'High Speed Hosting', 'Priority Support', 'Email Hosting', 'Site Security Monitoring','+ All in Small Business']}
        />
        </div>
    </div>
    <PricingCalculator />
</section>
