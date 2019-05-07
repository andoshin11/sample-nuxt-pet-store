// @ts-ignore
import { storiesOf } from '@storybook/vue'
import Button from './Button.vue'

storiesOf('components/shared/atoms/Button', module)
  .add('Normal', () => ({
    components: { Button },
    data() {
      return {
        types: ['primary', 'secondary'],
        sizes: ['sm', 'md']
      }
    },
    template: `
      <div>
        <div v-for="(type, i) in types" :key="i">
          <div v-for="(size, k) in sizes" :key="k" style="margin-bottom: 20px;">
            <Button :type="type" :size="size">
              <p>Type: {{ type }}, Size: {{ size }}</p>
            </Button>
          </div>
        </div>
      </div>
    `
  }))
  .add('Disabled', () => ({
    components: { Button },
    data() {
      return {
        types: ['primary', 'secondary'],
        sizes: ['sm', 'md']
      }
    },
    template: `
      <div>
        <div v-for="(type, i) in types" :key="i">
          <div v-for="(size, k) in sizes" :key="k" style="margin-bottom: 20px;">
            <Button :type="type" :size="size" disabled>
              <p>Type: {{ type }}, Size: {{ size }}</p>
            </Button>
          </div>
        </div>
      </div>
    `
  }))
