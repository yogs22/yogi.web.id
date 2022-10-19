<template> <!-- important to add template-->
  <section id="project" class="bg-primary text-white">
    <div class="container">
      <div class="text-center mb-4">
        <h2 class="mb-2">Take a look at my recent projects</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div class="w-100 mt-5">
        <carousel :loop="true" :nav="true" :margin="25" :responsive="{0:{items:1},461:{items:2},821:{items:3}}">
          <div class="w-100 mb-5">
            <div class="project">
              <div class="project-header">
                <img src="~/static/img/projects/dparagon.png" class="w-100" alt="dparagon project">
              </div>
              <div class="project-body">
                <strong class="d-block text-lg mb-1">D'Paragon</strong>
                <a href="#" class="text-sm">See Project Detail</a>
              </div>
            </div>
          </div>
          <div class="w-100 mb-5">
            <div class="project">
              <div class="project-header">
                <img src="~/static/img/projects/djurkam.png" class="w-100" alt="djurkam project">
              </div>
              <div class="project-body">
                <strong class="d-block text-lg mb-2">Djuragan Kamar</strong>
                <a href="#" class="text-sm">See Project Detail</a>
              </div>
            </div>
          </div>
          <div class="w-100 mb-5">
            <div class="project">
              <div class="project-header">
                <img src="~/static/img/projects/vexagame.png" class="w-100" alt="vexagame project">
              </div>
              <div class="project-body">
                <strong class="d-block text-lg mb-2">Vexa Game</strong>
                <a href="#" class="text-sm">See Project Detail</a>
              </div>
            </div>
          </div>
          <div class="w-100 mb-5">
            <div class="project">
              <div class="project-header">
                <img src="~/static/img/projects/djurvoc.png" class="w-100" alt="djurvoc project">
              </div>
              <div class="project-body">
                <strong class="d-block text-lg mb-2">Djuragan Voucher</strong>
                <a href="#" class="text-sm">See Project Detail</a>
              </div>
            </div>
          </div>
        </carousel>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Project'
}
</script>
