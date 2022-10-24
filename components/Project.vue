<template> <!-- important to add template-->
  <section id="project" class="bg-primary text-white">
    <div class="container">
      <div class="text-center mb-4">
        <h2 class="mb-2">Take a look at my recent projects</h2>
        <p>I have completed various projects with different technologies. The projects that I'm showing is only part of it because I can't show all the projects publicly. Some projects are private and protected by NDA</p>
      </div>
      <no-ssr class="w-100 mt-5">
        <carousel :loop="true" :nav="true" :margin="25" :responsive="{0:{items:1},461:{items:2},821:{items:3}}">
          <client-only class="w-100" v-for="(project, key) in projects" :key="key">
            <div class="project">
              <div class="project-header">
                <img :src="`/img/projects/${project.img}`" class="w-100" :alt="`${project.name} project`">
              </div>
              <div class="project-body">
                <strong class="d-block text-lg mb-1">{{ project.name }}</strong>
                <nuxt-link :to="`/project/${project.slug}`" class="text-sm">See Project Detail</nuxt-link>
              </div>
            </div>
          </client-only>
        </carousel>
      </no-ssr>
    </div>
  </section>
</template>

<script>
import projectsData from "~/static/project.json";

export default {
  name: 'Project',
  data() {
    return {
      projects: projectsData
    }
  }
}
</script>
