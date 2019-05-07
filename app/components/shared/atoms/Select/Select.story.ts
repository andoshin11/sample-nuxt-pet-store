// @ts-ignore
import { storiesOf } from '@storybook/vue'
import Select from './Select.vue'

const defaultOptions = [
  {
    value: '1',
    text: 'apple'
  },
  {
    value: '2',
    text: 'banana'
  },
  {
    value: '3',
    text: 'grape'
  },
  {
    value: '4',
    text: 'orange'
  }
]

storiesOf('components/shared/atoms/Select', module)
  .add('Default', () => ({
    components: { Select },
    data() {
      return {
        options: defaultOptions,
        value: null
      }
    },
    template: `
      <div class="wrapper" style="height: 500px; padding: 20px;">
        <Select :options="options" v-model="value" @change="checkType" />
      </div>
    `,
    methods: {
      checkType(val: number) {
        console.log('Type Number:', typeof val === 'number')
      }
    }
  }))
  .add('Size: sm', () => ({
    components: { Select },
    data() {
      return {
        options: defaultOptions,
        value: null
      }
    },
    template: `
      <div class="wrapper" style="height: 500px; padding: 20px;">
        <Select :options="options" size="sm" v-model="value" @change="checkType" />
      </div>
    `,
    methods: {
      checkType(val: number) {
        console.log('Type Number:', typeof val === 'number')
      }
    }
  }))
  .add('Custom Placeholder', () => ({
    components: { Select },
    data() {
      return {
        options: defaultOptions
      }
    },
    template: `
      <div class="wrapper" style="height: 500px; padding: 20px;">
        <Select :options="options" placeholder="Custom Placeholder" />
      </div>
    `
  }))
  .add('Disabled all', () => ({
    components: { Select },
    data() {
      return {
        options: defaultOptions
      }
    },
    template: `
      <div class="wrapper" style="height: 500px; padding: 20px;">
        <Select :options="options" disabled />
      </div>
    `
  }))
  .add('Disabled 1', () => ({
    components: { Select },
    data() {
      return {
        options: [
          ...defaultOptions,
          {
            value: 'pineapple',
            text: 'pineapple',
            disabled: true
          }
        ]
      }
    },
    template: `
      <div class="wrapper" style="height: 500px; padding: 20px;">
        <Select :options="options" />
      </div>
    `
  }))
  .add('Has error', () => ({
    components: { Select },
    data() {
      return {
        options: defaultOptions,
        value: null,
        errors: ['選択してください']
      }
    },
    template: `
    <div class="wrapper" style="height: 500px; padding: 20px;">
    <Select :options="options" v-model="value" :errors="errors" />
    </div>
  `
  }))
  .add('return Number', () => ({
    components: { Select },
    data() {
      return {
        options: defaultOptions,
        value: null,
        errors: ['選択してください'],
        checkValue: null
      }
    },
    template: `
    <div class="wrapper" style="height: 500px; padding: 20px;">
      <Select :options="options" v-model="value" outputType="number" @change="checkType" />
    </div>
    `,
    methods: {
      checkType(val: number) {
        console.log('Type Number:', typeof val === 'number')
      }
    }
  }))
  .add('unsetNullOption', () => ({
    components: { Select },
    data() {
      return {
        options: defaultOptions,
        value: null
      }
    },
    template: `
      <div class="wrapper" style="height: 500px; padding: 20px;">
        <Select :options="options" v-model="value" unsetNullOption />
      </div>
    `
  }))
  .add('Type', () => ({
    components: { Select },
    data() {
      return {
        options: defaultOptions,
        value: null,
        types: ['primary', 'secondary']
      }
    },
    template: `
      <div>
        <div class="wrapper" v-for="(type, index) in types" :key="index" style="padding: 20px;">
          <p>type: {{ type }}</p>
          <Select :options="options" typev-model="value" :type="type" />
        </div>      
      </div>
    `
  }))
