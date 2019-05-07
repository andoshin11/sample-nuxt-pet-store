<template>
  <div class="selectWrap">
    <span :class="['Select', sizeClassName, { hasError: hasError }]">
      <select :class="type" :disabled="disabled" :options="selectOptions" class="body" @input="handleInput" @change="handleChange">
        <option :selected="isValueEmpty" value="" disabled class="placeholder">
          {{ placeholder }}
        </option>
        <option v-for="(option, index) in selectOptions" :key="index" :value="option.value" :disabled="option.disabled" :selected="option.value === translatedValue">
          {{ option.text }}
        </option>
      </select>
    </span>
    <ul v-if="hasError" class="errors">
      <li v-for="(error, i) in errors" :key="i" class="error">{{ error }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { oneOf } from '@/utils/helper'

export interface SelectOption {
  value: string | null
  text: string
  disabled?: boolean
}

export default Vue.extend({
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array as () => SelectOption[],
      default: () => []
    },
    placeholder: {
      type: String,
      default: '選択してください'
    },
    value: {
      type: [String, Number],
      default: ''
    },
    errors: {
      type: Array as () => string[],
      default: () => []
    },
    outputType: {
      type: String,
      default: 'string',
      validator: oneOf(['string', 'number'])
    },
    unsetNullOption: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'primary',
      validator: oneOf(['primary', 'secondary'])
    },
    size: {
      type: String,
      default: 'md',
      validator: oneOf(['sm', 'md'])
    }
  },
  computed: {
    isValueEmpty(): boolean {
      return !this.value || this.value === ''
    },
    translatedValue(): string | null {
      return typeof this.value === 'string' ? this.value : this.stringify(this.value)
    },
    selectOptions(): SelectOption[] {
      return this.unsetNullOption ? [...this.options] : [{ value: null, text: this.placeholder }, ...this.options]
    },
    hasError(): boolean {
      return this.errors.length > 0
    },
    sizeClassName(): string {
      return `-${this.size}`
    }
  },
  methods: {
    handleInput(e: { target: { value: string } }): void {
      const value = e.target.value

      this.$emit('input', this.outputType === 'number' ? this.numerify(value) : value)
    },
    handleChange(e: { target: { value: string } }): void {
      const value = e.target.value

      this.$emit('change', this.outputType === 'number' ? this.numerify(value) : value)
    },
    stringify(val: number | null): string | null {
      return val === null ? null : String(val)
    },
    numerify(val: string | null): number | null {
      return val === null ? null : Number(val)
    }
  }
})
</script>

<style scoped>
.selectWrap {
  width: 100%;
}

.Select {
  position: relative;
  width: 100%;
}

.Select::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  right: 16px;
  margin: auto;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 7px solid #666666;
  pointer-events: none;
}

.placeholder {
  display: none;
}

.body {
  width: 100%;
  height: 48px;
  padding: 0 16px;
  border: solid 1px #e0e0e0;
  border-radius: 8px;
  background-color: #fff;
}

.body[disabled] {
  opacity: 0.7;
}
.body:focus {
  outline-color: #ff5b1a;
}

.Select.-sm {
  height: 40px;
}
.Select.-sm > .Select-body {
  height: 40px;
}
.Select-body.secondary {
  height: 42px;
}
.hasError > select {
  position: relative;
  border: solid 2px #e91e63;
}

.errors {
  margin-top: 8px;
  padding-left: 8px;
  color: #e91e63;
}
</style>
