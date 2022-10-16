<!-- Please remove this file from your project -->
<template>
  <nav id="nav">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-4">
          <img src="~/static/img/nav-icon.png" alt="yogi nav icon">
        </div>
        <div class="col-md-8">
          <ul class="float-right">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experiences</a></li>
            <li><a href="#portfolio">Portfolios</a></li>
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
  created() {
    this.hasScrolled()
  },
  methods: {
    hasScrolled(){
      // console.log(window.scrollY)
      // var navbar = document.getElementById('nav');
      // if (window.scrollY > 100) {
      //   navbar.classList.add('scrolled');
      // } else {
      //   navbar.classList.remove('scrolled');
      // }
    }
  }
}
</script>
