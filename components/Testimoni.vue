<!-- Please remove this file from your project -->
<template>
  <section id="testimoni">
    <div class="container text-center">
      <div class="mb-3">
        <h2 class="mb-3">What People Says</h2>
        <span class="text-muted d-block mb-2">See people who give me a recomendations</span>
        <span class="text-muted d-block">based on my Linkedin account</span>
      </div>
      <carousel :loop="true" :items="1" :nav="false" :autoplay="true">
        <div class="p-0 pt-5 px-md-5">
          <div class="container-fluid">
            <div class="px-md-5">
              <p class="text-muted">“It's been a pleasure working with Yogi Prasetyawan as a Development Team for my half a year. The task that we work together is develop and improve web and mobile applications for reservations by users in the D’Paragon & Djuragan Kamar Company. Yogi has been working diligently as a Backend Developer at both company aboutproximate for almost 1.5 years. Welldone Yogi!”</p>
            </div>
            <img src="~/static/img/testi/fauzi.jpg" alt="fauzi" class="img-rounded testi-img my-4">
            <p class="text-lg m-0"><strong>Fauzi Zaki</strong></p>
            <p class="m-0 text-sm text-muted">Software Engineer at Telkom Indonesia</p>
          </div>
        </div>
        <div class="p-0 pt-5 px-md-5">
          <div class="container-fluid">
            <div class="px-md-5">
              <p class="text-muted">“Yogi's work is very well done. With his help, i can integrate chatbot whatsapp with API backend that ease me to get response very quick”</p>
            </div>
            <img src="~/static/img/testi/amirul.jpg" alt="amirul" class="img-rounded testi-img my-4">
            <p class="text-lg m-0"><strong>Muhammad Amirul M.</strong></p>
            <p class="m-0 text-sm text-muted">Odoo Consultant at Arkana Solusi Digital</p>
          </div>
        </div>
        <div class="p-0 pt-5 px-md-5">
          <div class="container-fluid">
            <div class="px-md-5">
              <p class="text-muted">“Yogi is a great frontend developer, he has neat and good coding skills. I really admire his hard work on the team. and in my opinion, you are the team that inspired me the most”</p>
            </div>
            <img src="~/static/img/testi/zaki.jpg" alt="zaki" class="img-rounded testi-img my-4">
            <p class="text-lg m-0"><strong>Zaki Maliki</strong></p>
            <p class="m-0 text-sm text-muted">Academic Coding Instructor</p>
          </div>
        </div>
      </carousel>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Testimoni'
}
</script>
