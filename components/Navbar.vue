<!-- Please remove this file from your project -->
<template>
  <nav id="nav" :class="{scrolled: scrollPosition > 30}">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-4">
          <img src="~/static/img/nav-icon.png" alt="yogi nav icon">
        </div>
        <div class="col-8">
          <ul class="float-right d-lg-block d-none">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experiences</a></li>
            <li><a href="#project">Portfolios</a></li>
            <li><a href="#award">Awards</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div class="d-lg-none d-block float-right">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" onclick="showSidebar()" class="nav-icon"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path></svg>
          </div>
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
