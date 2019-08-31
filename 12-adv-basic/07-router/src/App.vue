<template>
  <div id="app">
    <div id="nav">
      <router-link to="/movie">电影</router-link> |
      <router-link to="/tv/5">电视剧</router-link>
    </div>
    <router-view/>
    <router-view name="login"></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
