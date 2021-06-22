import { h, resolveComponent } from 'vue'

export default {
  name: 'RenderIcon',
  props: {
    icon: {
      type: String,
      required: true
    },
    props: {
      type: Object,
      default: {}
    },
    event: {
      type: Object,
      default: {}
    }
  },
  render () {
    return h(resolveComponent(this.icon), this.props, this.event)
  }
}
