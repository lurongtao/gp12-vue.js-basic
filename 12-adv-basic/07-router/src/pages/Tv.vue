<template>
  <div>
    {{$route.params.id}} / {{$route.query.id}}
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log(to)
    next((vm) => {
      console.log(vm)
    })
  },

  beforeRouteLeave(to, from, next) {
    // console.log('leave')
    next()
  }
}
</script>