<template>
  <div v-if="isDevMode" class="DevMenu">
    <div class="left">
      <div class="label">Dev Menu</div>
    </div>
    <div class="right">
      <button @click="copyState">Copy State</button>
    </div>
    <textarea ref="hiddenArea" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    isDevMode(): boolean {
      return process.env.NODE_ENV !== 'production'
    }
  },
  methods: {
    copyState() {
      const hiddenArea = this.$refs['hiddenArea'] as HTMLInputElement
      if (!hiddenArea) return
      hiddenArea.textContent = JSON.stringify(this.$store.state, null, '\t')
      hiddenArea.select()
      document.execCommand('copy')
      alert('Copied Vuex snapshot!')
      hiddenArea.textContent = ''
    }
  }
})
</script>

<style scoped>
.DevMenu {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #000;
  color: #fff;
  padding: 0 16px;
}
.actions {
  list-style: none;
}
textarea {
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
}
</style>
