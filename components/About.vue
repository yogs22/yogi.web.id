<!-- Please remove this file from your project -->
<template>
  <section id="about" class="bg-grey">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-5" data-aos="fade-right">
          <NuxtImg
            src="/img/about.png"
            format="webp"
            class="w-100 m-auto d-block"
            loading="eager"
            alt="about yogi"
          />
        </div>
        <div class="col-md-7 mt-md-0 mt-5" data-aos="zoom-in">
          <label class="text-danger mb-2 d-block">Yogi Prasetyawan</label>
          <h2 class="m-0">Know More About Me</h2>
          <p style="text-align: justify">
            I am currently working as a Frontend Engineer at Luwjistik, where my
            main responsibility is maintaining company product interface using
            Vue and React. In addition to my primary role, I had the opportunity
            to contribute to various part-time projects as a Fullstack Engineer
            across different field of business.
          </p>
          <p class="mb-4"><strong>Languages</strong></p>
          <span class="d-block mb-2">🇮🇩 Indonesia Native</span>
          <span class="d-block">🇬🇧 English Fluent</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>
