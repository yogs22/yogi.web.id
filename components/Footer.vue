<!-- Please remove this file from your project -->
<template>
  <footer>
    <div id="contact" class="text-center" data-aos="zoom-in">
      <p class="emoji mb-3">🎉</p>
      <h2 class="mb-3">Got a Project? Contact Me</h2>
      <p class="text-muted mb-5 px-3">
        Planning a project? Don't hesitate to reach out to me for expert project
        management <br />or consider having me as a valuable addition to your
        engineering team
      </p>
      <a
        href="mailto:yogiprasetyawan12@gmail.com"
        target="_blank"
        class="btn btn-primary mr-3"
        >Contact Me</a
      >
    </div>
    <div class="container text-sm">
      <div class="row py-4 border-bottom align-items-center">
        <div class="col-md-6 text-md-left text-center">
          <a href="mailto:yogiprasetyawan12@gmail.com"
            >📩 &nbsp; yogiprasetyawan12@gmail.com</a
          >
        </div>
        <div class="col-md-6 text-md-right text-center mt-md-0 mt-3">
          <a
            href="https://wa.me/send?phone=6281228170370"
            class="ml-2"
            target="_blank"
          >
            <NuxtImg
              format="webp"
              loading="eager"
              src="/img/vector/whatsapp.svg"
              class="socmed"
              alt="whatsapp"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/yogiprasetyawan/"
            class="ml-2"
            target="_blank"
          >
            <NuxtImg
              format="webp"
              loading="eager"
              src="/img/vector/linkedin.svg"
              class="socmed"
              alt="linkedin"
            />
          </a>
          <a href="https://github.com/yogs22" class="ml-2" target="_blank">
            <NuxtImg
              format="webp"
              loading="eager"
              src="/img/vector/github.svg"
              class="socmed"
              alt="github"
            />
          </a>
          <a
            href="https://www.instagram.com/yogiprasetyawan_/"
            class="ml-2"
            target="_blank"
          >
            <NuxtImg
              format="webp"
              loading="eager"
              src="/img/vector/instagram.svg"
              class="socmed"
              alt="instagram"
            />
          </a>
        </div>
      </div>
      <div class="row pt-4 pb-5">
        <div class="col-md-6 text-md-left text-center">
          <span class="text-muted"
            >©yogiprasetyawan 2022. All rights reserved.</span
          >
        </div>
        <div class="col-md-6 text-md-right text-center">
          <div class="position-relative mt-md-0 mt-2">
            <div class="pt-1 d-inline">
              <NuxtImg
                format="webp"
                loading="eager"
                src="/img/vector/map-pin.svg"
                class="mr-2 pin"
              />
            </div>
            <div class="d-inline">
              <span class="text-muted">Yogyakarta, Indonesia</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
