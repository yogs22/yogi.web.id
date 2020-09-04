<template>
  <div class="hello">
      <div>
          <img alt="Yogi Prasetyawan" src="./../assets/logo.png" class="img-logo">

          <h1>{{ msg }}</h1>

          <p>
              Currently i'm working at <a href="https://dparagon.com" target="_blank" rel="noreferrer">D'Paragon</a> the biggest exclusive boarding house in Indonesia. <br>
              Work as Software Engineer who manage ERP System and several other applications with Laravel and Vue.
          </p>

          <p>
              Not only that, I also manage <a href="https://vexagame.com" target="_blank">VexaGame</a> which is a blog that discusses about games and technology in the millennial era
          </p>

          <h3>Social Link</h3>
          <ul>
              <li><a href="https://www.facebook.com/yogiyogs22/" target="_blank" rel="noopener">facebook</a></li>
              <li><a href="https://www.instagram.com/yogiprasetyawan_/" target="_blank" rel="noopener">instagram</a></li>
              <li><a href="https://www.linkedin.com/in/yogiprasetyawan" target="_blank" rel="noopener">linkedin</a></li>
              <li><a href="https://twitter.com/yogs_22" target="_blank" rel="noopener">twitter</a></li>
              <li><a href="https://github.com/yogs22" target="_blank" rel="noopener">github</a></li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: crimson;
  text-decoration: none;
  font-weight: bold;
}

.hello {
    height: 95vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.hello div {
    width: 100%;
}

.img-logo {
    width: 200px;
    object-fit: cover;
    border-radius: 50%;
}
</style>
