<!-- Please remove this file from your project -->
<template>
  <section id="experience" class="pt-3">
    <div class="container" data-aos="zoom-in" data-aos-offset="200">
      <h2 class="mt-0">Professional Experiences</h2>
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-md-6 col-sm-12">
          <div class="container-journey">
            <div class="dot">
              <div class="circle bg-primary line"></div>
              <div>
                <strong class="d-block">Frontend Developer</strong>
                <span class="d-block text-muted mt-1">Luwjistik</span>
                <span class="d-block text-muted mt-1">2023 - present</span>
                <span class="d-block text-muted mt-1">Singapore · Remote</span>
              </div>
            </div>
            <div class="dot">
              <div class="circle bg-primary line"></div>
              <div>
                <strong class="d-block">Software Engineer</strong>
                <span class="d-block text-muted mt-1"
                  >PT. Royal Dparagon Land</span
                >
                <span class="d-block text-muted mt-1">2018 - 2022</span>
                <span class="d-block text-muted mt-1"
                  >Yogyakarta, Indonesia</span
                >
              </div>
            </div>
            <div class="dot">
              <div class="circle line-two"></div>
              <div>
                <strong class="d-block">Web Developer</strong>
                <span class="d-block text-muted mt-1"
                  >Geek Garden Software House</span
                >
                <span class="d-block text-muted mt-1">2018 - 2018</span>
                <span class="d-block text-muted mt-1"
                  >Yogyakarta, Indonesia</span
                >
              </div>
            </div>
            <div class="dot">
              <div class="circle"></div>
              <div>
                <strong class="d-block">Student Internship</strong>
                <span class="d-block text-muted mt-1">BLC Telkom</span>
                <span class="d-block text-muted mt-1">2016 - 2017</span>
                <span class="d-block text-muted mt-1">Klaten, Indonesia</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <NuxtImg
            src="/img/experience.png"
            loading="eager"
            class="w-100"
            alt="education image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Experience",
};
</script>
