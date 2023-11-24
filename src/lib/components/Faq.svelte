<script>
    let faqs = [
      {
        question: "What services do you offer?",
        answer: "We offer a variety of web development services including ..."
      },
      {
        question: "How long does it take to build a website?",
        answer: "The time to build a website can vary depending on the complexity ..."
      },
    ];
  </script>
  
  <div class="my-8 p-4">
    <h2 class="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
    {#each faqs as faq}
      <div class="mb-4">
        <h3 class="font-semibold text-lg">{faq.question}</h3>
        <p class="text-gray-600">{faq.answer}</p>
      </div>
    {/each}
  </div>
  