<template>
  <div class="wrapper">
    <main>
      <nuxt />
    </main>
    <DevMenu />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
const DevMenu = () => import('@/containers/DevMenu')

export default Vue.extend({
  components: {
    DevMenu
  }
})
</script>

<style>
body {
  margin: 0;
  position: relative;
}

.wrapper {
  width: 100%;
}

main {
  min-height: 100vh;
  width: 100vw;
  background-color: #fff;
}
</style>
