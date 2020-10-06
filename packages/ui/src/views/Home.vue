<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import { Route, NavigationGuardNext } from 'vue-router'
import { Log } from '@/vue-assets/decorators/log'

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  beforeRouteEnter(to: Route, from: Route, next: NavigationGuardNext<Home>) {
    console.log(to)
    next(vm => {
      vm.test()
      // console.log(vm.);
    })
  }

  @Log
  test() {
    this.$router.push({ path: '/' })
  }
}
</script>
