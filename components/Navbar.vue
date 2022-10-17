<!-- Please remove this file from your project -->
<template>
  <nav id="nav" :class="{scrolled: scrollPosition > 30}">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-4">
          <img src="~/static/img/nav-icon.png" alt="yogi nav icon">
        </div>
        <div class="col-md-8">
          <ul class="float-right">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experiences</a></li>
            <li><a href="#project">Portfolios</a></li>
            <li><a href="#award">Awards</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      scrollPosition: null
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  methods: {
    updateScroll() {
       this.scrollPosition = window.scrollY
    }
  }
}
</script>
