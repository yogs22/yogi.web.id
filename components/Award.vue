<template>
  <section id="award">
    <div class="container">
      <div class="mb-5 text-center" data-aos="zoom-out" data-aos-offset="400">
        <h2 class="mb-3 mt-0">Awards</h2>
        <span class="text-muted mb-1 d-block"
          >During my school years, I actively participated in various
          competitions and emerged victorious in several of them</span
        >
        <span class="text-muted d-block"
          >Feel free to click on the following cards to view the
          certificates.</span
        >
      </div>
      <div class="row">
        <div
          v-for="(award, index) in awards"
          :key="index"
          class="col-lg-4 mb-3"
        >
          <a :href="award.certificateLink" target="_blank">
            <div
              class="card-body text-center"
              data-aos="zoom-in"
              data-aos-offset="300"
              :data-aos-delay="(index + 1) * 300"
            >
              <img
                :src="award.imageSrc"
                :alt="award.altText"
                class="mb-3"
                :width="award.imageWidth"
              />
              <strong class="d-block mb-1">{{ award.title }}</strong>
              <span class="d-block mb-1 text-muted">{{ award.position }}</span>
              <span class="d-block mb-1 text-muted">{{
                award.competition
              }}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Award",
  data() {
    return {
      awards: [
        {
          title: "1st Winner (National)",
          position: "Web Design Competition",
          competition: "Jakarta Muhammadiyah University",
          certificateLink:
            "https://drive.google.com/file/d/1LpFW9TZi5nGzk5M0ilXKHqxKdlqfFBfx/view",
          imageSrc: "/img/awards/umj.png",
          imageWidth: "134",
          altText: "umj award",
        },
        {
          title: "4th Position (National)",
          position: "Web Design Competition",
          competition: "Udayana University Bali",
          certificateLink:
            "https://drive.google.com/file/d/1q6uWK_g9or7RcuDPl_XoYdCAwrICeMWU/view",
          imageSrc: "/img/awards/udayana.png",
          imageWidth: "120",
          altText: "udayana award",
        },
        {
          title: "6th Position (Province)",
          position: "Web Design Competition",
          competition: "East Java Goverment",
          certificateLink:
            "https://drive.google.com/file/d/1t8T2zJV3rRmKeU4Q73tWZ9_horZ6MNWO/view",
          imageSrc: "/img/awards/jatim.png",
          imageWidth: "96",
          altText: "east java award",
        },
      ],
    };
  },
};
</script>
