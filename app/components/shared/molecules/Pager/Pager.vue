<template>
  <div class="Pager">
    <div class="info">{{ totalPage }}ページ中{{ currentPage }}目を表示</div>
    <div class="nav">
      <Button class="navItem" type="secondary" size="sm" :disabled="currentPage <= 1" @click="handlePrev">前へ</Button>
      <Select class="navItem" size="sm" :options="pages" :value="currentPage" output-type="number" @change="handleChange" />
      <Button class="navItem" type="secondary" size="sm" :disabled="currentPage >= totalPage" @click="handleNext">次へ</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { range } from '@/utils/helper'
import Button from '@/components/shared/atoms/Button'
import Select, { SelectOption } from '@/components/shared/atoms/Select'

export default Vue.extend({
  components: {
    Button,
    Select
  },
  props: {
    totalPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    pages(): SelectOption[] {
      return range(1, this.totalPage).map(page => ({
        value: String(page),
        text: String(page)
      }))
    }
  },
  methods: {
    handlePrev() {
      this.$emit('change', this.currentPage - 1)
    },
    handleNext() {
      this.$emit('change', this.currentPage + 1)
    },
    handleChange(val: string) {
      this.$emit('change', Number(val))
    }
  }
})
</script>

<style scoped>
.Pager {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  height: 112px;
  width: 100%;
}

.info {
  margin-bottom: 8px;
}

.nav {
  display: flex;
}

.navItem {
  width: 80px;
  margin-right: 16px;
  border-color: #e0e0e0;
}

.navItem:last-child {
  margin-right: 0;
}
</style>
