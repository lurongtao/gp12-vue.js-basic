<template>
  <div>
    <ul>
      <router-link 
        v-for="m in movielist" 
        :key="m.id"
        :to="{name: 'detail', params: { id: m.id }, query: {uid: 90}}"
        tag="li"
      >
        {{m.title}}
      </router-link>
      <router-view></router-view>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movielist: [
        {
          id: '001',
          title: '喜剧'
        },
        {
          id: '002',
          title: '刑侦'
        }
      ]
    }
  },

  // beforeRouteUpdate (to, from, next) {
  //   console.log(0)
  // }

  // destroyed() {
  //   console.log('i am die')
  // },
}
</script>