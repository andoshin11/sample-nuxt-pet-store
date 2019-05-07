<template>
  <button :type="nativeType" :disabled="disabled" :class="[typeClassName, sizeClassName]" class="Button" @click="handleClick">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import { oneOf } from '@/utils/helper'

export default Vue.extend({
  props: {
    nativeType: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'md',
      validator: oneOf(['sm', 'md'])
    },
    type: {
      type: String,
      default: 'primary',
      validator: oneOf(['primary', 'secondary'])
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    typeClassName(): string {
      return `-${this.type}`
    },
    sizeClassName(): string {
      return `-${this.size}`
    }
  },
  methods: {
    handleClick() {
      if (!this.disabled) {
        this.$emit('click')
      }
    }
  }
})
</script>

<style scoped>
.Button {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  overflow: hidden;
  text-align: center;
  width: 100%;
  min-height: 48px;
  font-size: 1.6rem;
  background-color: #fff;
  border: #424242 1px solid;
  color: #424242;
  outline: none;
  margin: auto;
  padding: 16px;
  border-radius: 8px;
}

.Button:hover {
  text-decoration: none;
}

.Button.-sm {
  min-height: 40px;
  font-size: 1.4rem;
  padding: 8px;
}
.Button.-primary {
  background-color: #ff5b1a;
  border: none;
  color: #fff;
}
.Button[disabled] {
  background-color: #e0e0e0;
  border: none;
  color: #fff;
}
</style>
