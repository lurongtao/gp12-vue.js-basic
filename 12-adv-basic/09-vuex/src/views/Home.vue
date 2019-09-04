<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HelloWorld msg="Hello" ref="hw2"></HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data() {
    return {
      message: 'yeap'
    }
  },
  components: {
    HelloWorld
  },
  mounted() {
    console.log(this.$refs['hw2'].$props.msg)
  },
}
</script>
