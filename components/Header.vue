<!-- Please remove this file from your project -->
<template>
  <header class="w-100 position-relative">
    <NuxtImg
      src="/img/header.png"
      format="webp"
      class="header-img"
      alt="yogi prasetyawan"
      loading="eager"
      priority
    />
    <div class="container h-100">
      <div class="row header-row h-100">
        <div class="col-md-7" data-aos="fade-down">
          <div class="mb-4 title">
            <strong>Hi 👋 I am</strong>
            <h1 class="m-0">Yogi Prasetyawan</h1>
          </div>
          <div class="mb-4">
            <div class="w-75 w-sm-100">
              <p class="m-0">
                I am a software engineer with
                {{ new Date().getFullYear() - 2017 }} years of experience in
                developing scalable and reliable software solutions
              </p>
            </div>
          </div>
          <div class="pt-3">
            <a href="#contact" class="btn btn-primary mr-md-3 mr-1"
              >Contact Me</a
            >
            <a
              href="https://drive.google.com/file/d/1Z0Bu6OgOZ_MI8MW-oLnnnnuUovBDnQ3Q/view?usp=sharing"
              target="_blank"
              class="btn btn-primary-outline"
              >Download CV</a
            >
          </div>
        </div>
        <div class="col-lg-5"></div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
