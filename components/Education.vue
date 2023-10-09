<!-- Please remove this file from your project -->
<template>
  <section id="education">
    <div class="container">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-md-6 col-sm-12 mb-4 mb-md-0" data-aos="fade-up-left">
          <NuxtImg
            src="/img/study.png"
            format="webp"
            class="w-75"
            loading="eager"
            alt="education image"
          />
        </div>
        <div class="col-md-6 col-sm-12" data-aos="flip-left">
          <h2 class="mt-0">Educational Background</h2>
          <div class="container-journey">
            <div class="dot">
              <div class="circle bg-primary line"></div>
              <div>
                <strong class="d-block"
                  >Informatic Technics (Bachelor Degree)</strong
                >
                <span class="d-block text-muted mt-1"
                  >Mercu Buana University</span
                >
                <span class="d-block text-muted mt-1">2020 - 2024</span>
              </div>
            </div>
            <div class="dot">
              <div class="circle"></div>
              <div>
                <strong class="d-block">Software Engineering</strong>
                <span class="d-block text-muted mt-1">SMKN 1 Mejayan</span>
                <span class="d-block text-muted mt-1">2016 - 2018</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Education",
};
</script>
