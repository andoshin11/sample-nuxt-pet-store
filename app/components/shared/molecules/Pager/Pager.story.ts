// @ts-ignore
import { storiesOf } from '@storybook/vue'
import Vue from 'vue'
import Pager from './Pager.vue'

storiesOf('components/shared/molecules/Pager', module)
  .add('Default', () =>
    Vue.extend({
      components: { Pager },
      data() {
        return {
          totalPage: 30,
          currentPage: 5
        }
      },
      methods: {
        handleChange(val: number) {
          this.currentPage = val
        }
      },
      template: `
    <div class="wrapper">
      <Pager :totalPage="totalPage" :currentPage="currentPage" @change="handleChange" />
    </div>
  `
    })
  )
  .add('First', () =>
    Vue.extend({
      components: { Pager },
      data() {
        return {
          totalPage: 30,
          currentPage: 1
        }
      },
      methods: {
        handleChange(val: number) {
          this.currentPage = val
        }
      },
      template: `
  <div class="wrapper">
    <Pager :totalPage="totalPage" :currentPage="currentPage" @change="handleChange" />
  </div>
`
    })
  )
  .add('Last', () =>
    Vue.extend({
      components: { Pager },
      data() {
        return {
          totalPage: 30,
          currentPage: 30
        }
      },
      methods: {
        handleChange(val: number) {
          this.currentPage = val
        }
      },
      template: `
  <div class="wrapper">
    <Pager :totalPage="totalPage" :currentPage="currentPage" @change="handleChange" />
  </div>
`
    })
  )
