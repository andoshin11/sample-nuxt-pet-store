import { configure, addDecorator } from '@storybook/vue'
import Decorator from './Decorator.vue'

addDecorator(story => ({
  components: { Decorator },
  template: `
    <decorator>
      <story slot="story"/>
    </decorator>
  `
}))

// automatically import all files ending in *.stories.js
const req = require.context('../../app', true, /.story.ts$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
