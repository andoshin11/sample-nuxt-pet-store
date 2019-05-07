<template>
  <div class="decorator">
    <slot name="story" />
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import VScrollLock from 'v-scroll-lock'

Vue.use(Vuex)
Vue.use(VScrollLock)

Vue.component('NuxtLink', {
  props: {
    to: {
      type: String | Object,
      default: '' | {}
    },
    tag: {
      type: String,
      default: 'a'
    }
  },
  template: '<component :is="tag"><slot>{{to}}NuxtLink</slot></component>'
})
export default {
  name: 'Decorator'
}
</script>
