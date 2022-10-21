<template>
  <section>
    <div class="container pt-5">
      <div class="row pt-5">
        <div class="col-md-5">
          <img :src="`/img/projects/${project.img}`" class="w-100" :alt="`${project.name} project`">
        </div>
        <div class="col-md-7">
          <nuxt-link to="/#project" class="text-sm">🔙 Back</nuxt-link>
          <div class="w-100">
            <div class="mt-1 mb-md-4 mb-2">
              <h1>{{ project.name }} Project</h1>
            </div>
            <div class="row my-2 w-100">
              <div class="col-md-4 mt-2 mb-3 mt-md-0 mb-md-0 d-flex align-items-center">
                <a :href="project.url" target="_blank" class="btn btn-primary-outline btn-rounded w-xs-100">Show Project</a>
              </div>
              <div class="col-md-8">
                <div class="img d-inline mr-4" v-for="img in project.stack">
                  <img :src="`/img/skills/${img}.png`" :alt="img">
                </div>
              </div>
            </div>
            <el v-html="project.description"></el>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import projectsData from "~/static/project.json";

export default {
  name: 'ProjectDetail',
  data() {
    return {
      projects: projectsData,
      project: []
    }
  },
  mounted() {
    this.project = this.projects.find(data => data.slug === this.$route.params.id);
  }
}
</script>
