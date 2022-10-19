<!-- Please remove this file from your project -->
<template>
  <div id="navbar">
    <nav id="nav" :class="{scrolled: scrollPosition > 30}">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-4">
            <img src="~/static/img/nav-icon.png" alt="yogi nav icon">
          </div>
          <div class="col-8">
            <ul class="float-right d-lg-block d-none">
              <li><a href="#about" @click="scrollTo($event)">About</a></li>
              <li><a href="#experience" @click="scrollTo($event)">Experiences</a></li>
              <li><a href="#project" @click="scrollTo($event)">Portfolios</a></li>
              <li><a href="#award" @click="scrollTo($event)">Awards</a></li>
              <li><a href="#contact" @click="scrollTo($event)">Contact</a></li>
            </ul>
            <div class="d-lg-none d-block float-right">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" @click="showSidebar(true)" class="nav-icon"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path></svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div :class="[sidebar ? 'ml-0' : null, 'sidebar']">
      <div class="w-100 pr-5 text-right">
        <svg class="svg-icon cursor-pointer" viewBox="0 0 20 20" @click="showSidebar(false)">
					<path fill="none" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
				</svg>
      </div>
      <ul class="sidebar-menu">
        <li><a href="#about" @click="scrollTo($event)">About</a></li>
        <li><a href="#experience" @click="scrollTo($event)">Experiences</a></li>
        <li><a href="#project" @click="scrollTo($event)">Portfolios</a></li>
        <li><a href="#award" @click="scrollTo($event)">Awards</a></li>
        <li><a href="#contact" @click="scrollTo($event)">Contact</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      scrollPosition: null,
      sidebar: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    showSidebar(val) {
      this.sidebar = val
    },
    scrollTo(event) {
      this.showSidebar(false)
      event.preventDefault();

      document.querySelector(event.currentTarget.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
    }
  }
}
</script>
