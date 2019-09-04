<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import Bus from '../components/Bus'
export default {
  inject: ['sayName'],
  mounted() {
    Bus.$emit('message', 'hello')
    this.sayName('dddd')
  },
}
</script>
