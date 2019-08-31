<template>
  <div>
    <!-- {{id}} / {{uid}} / {{abc}} -->
    <div>
      <button @click="handleClick">Tv</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['abc'],
  watch: {
    $route (to, from) {
      console.log(from.params.id)
    }
  },
  methods: {
    handleClick() {
      this.$router.push({path: '/tv/x', query: { id: 9 }})
    }
  },
  mounted() {
    console.log(this.abc)
  },
  // beforeRouteUpdate (to, from, next) {
  //   console.log(from.params.id)
  // }
}
</script>
