<template>
  <section id="skill" class="bg-grey">
    <div class="container">
      <div class="mb-5" data-aos="fade-up" data-aos-offset="200">
        <h2 class="mb-3">Programming Skills</h2>
        <span class="d-block text-muted">
          The classification of levels is determined by the duration of my
          experience utilizing the respective technology at the production
          level.
        </span>
      </div>
      <div
        v-for="(skillCategory, index) in skillCategories"
        :key="index"
        class="row"
      >
        <div class="col-12">
          <div class="pt-2 mb-5">
            <h3 :class="skillCategory.class">{{ skillCategory.title }}</h3>
          </div>
        </div>
        <div
          v-for="(skill, skillIndex) in skillCategory.skills"
          :key="skillIndex"
          class="col-md-2 col-6 mb-5 text-center"
        >
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            :data-aos-delay="((skillIndex % 6) + 1) * 150"
          >
            <div class="img mb-4">
              <NuxtImg
                loading="eager"
                format="webp"
                :src="skill.imgSrc"
                :alt="skill.altText"
              />
            </div>
            <strong class="d-block">{{ skill.name }}</strong>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Skill",
  data() {
    return {
      skillCategories: [
        {
          title: "Medior & Expert Skills",
          class: "text-danger",
          skills: [
            {
              name: "HTML & CSS",
              imgSrc: "/img/skills/html-css.png",
              altText: "html-css",
            },
            {
              name: "Javascript",
              imgSrc: "/img/skills/javascript.png",
              altText: "javascript",
            },
            {
              name: "PHP",
              imgSrc: "/img/skills/php.png",
              altText: "php",
            },
            {
              name: "MySQL",
              imgSrc: "/img/skills/mysql.png",
              altText: "mysql",
            },
            {
              name: "Laravel",
              imgSrc: "/img/skills/laravel.png",
              altText: "laravel",
            },
            {
              name: "Bootstrap",
              imgSrc: "/img/skills/bootstrap.png",
              altText: "bootstrap",
            },
            {
              name: "Tailwind",
              imgSrc: "/img/skills/tailwind.png",
              altText: "tailwind",
            },
            {
              name: "Vue JS",
              imgSrc: "/img/skills/vuejs.png",
              altText: "vuejs",
            },
            {
              name: "Nuxt JS",
              imgSrc: "/img/skills/nuxt.png",
              altText: "nuxt",
            },
            {
              name: "React JS",
              imgSrc: "/img/skills/reactjs.png",
              altText: "reactjs",
            },
            {
              name: "Next JS",
              imgSrc: "/img/skills/next.png",
              altText: "next",
            },
            {
              name: "React Native",
              imgSrc: "/img/skills/reactjs.png",
              altText: "reactjs",
            },
            {
              name: "Typescript",
              imgSrc: "/img/skills/typescript.png",
              altText: "typescript",
            },
            {
              name: "Remix",
              imgSrc: "/img/skills/remix.png",
              altText: "remix",
            },
            {
              name: "Shadcn UI",
              imgSrc: "/img/skills/shadcn.png",
              altText: "shadcn",
            },
            {
              name: "Wordpress",
              imgSrc: "/img/skills/wordpress.png",
              altText: "wordpress",
            },
            {
              name: "Git",
              imgSrc: "/img/skills/git.png",
              altText: "git",
            },
            {
              name: "Gitlab CI",
              imgSrc: "/img/skills/gitlab-ci.png",
              altText: "gitlab-ci",
            },
          ],
        },
        {
          title: "Junior Skills",
          class: "text-primary",
          skills: [
            {
              name: "Node JS",
              imgSrc: "/img/skills/nodejs.png",
              altText: "nodejs",
            },
            {
              name: "Python",
              imgSrc: "/img/skills/python.png",
              altText: "python",
            },
            {
              name: "Mongo DB",
              imgSrc: "/img/skills/mongodb.png",
              altText: "mongodb",
            },
            {
              name: "Firebase",
              imgSrc: "/img/skills/firebase.png",
              altText: "firebase",
            },
            {
              name: "Express JS",
              imgSrc: "/img/skills/expressjs.png",
              altText: "expressjs",
            },
            {
              name: "Django",
              imgSrc: "/img/skills/django.png",
              altText: "django",
            },
            { name: "Go", imgSrc: "/img/skills/go.png", altText: "go" },
            {
              name: "Java",
              imgSrc: "/img/skills/java.png",
              altText: "java",
            },
            {
              name: "Docker",
              imgSrc: "/img/skills/docker.png",
              altText: "docker",
            },
            {
              name: "AWS",
              imgSrc: "/img/skills/aws.png",
              altText: "aws",
            },
            {
              name: "Jenkins",
              imgSrc: "/img/skills/jenkins.png",
              altText: "jenkins",
            },
            {
              name: "PostgreSQL",
              imgSrc: "/img/skills/postgresql.png",
              altText: "postgresql",
            },
          ],
        },
      ],
    };
  },
};
</script>
