import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class ToDoItem extends Vue {
  @Prop() private title: string
  @Prop() private id: string
  data() {
    return {

    }
  }
  render(createElement) {
    return createElement(
      'li',
      [
        `(${this.id === void 0 ? 'unknow' : this.id})` + this.title,
        createElement('button', { on: { 'click': () => { this.$emit('remove', this.id) } } }, 'Remove')
      ]
    )
    // `
    // <li>
    //   {{ title }}
    //   <button v-on:click="$emit('remove')">Remove</button>
    // </li>
    // `
  }
}