import { Component, Prop, Vue } from 'vue-property-decorator'
import ToDoItem from './ToDoItem'

@Component
export default class Addition extends Vue {
  @Prop({ default: () => ({}) }) private input

  private todos: Array<{ [key: string]: any }> = [
    {
      id: 1,
      title: 'Do the dishes',
    },
    {
      id: 2,
      title: 'Take out the trash',
    },
    {
      id: 3,
      title: 'Mow the lawn'
    }
  ]
  private newTodoText = ''
  private newTodoText2 = ''

  protected render(createElement) {
    const { input } = this
    console.info(input, this.todos)
    return createElement(
      'div',
      {
        attrs: { id: "todo-list-example" }
      },
      [
        'this.todos = ' + JSON.stringify(this.todos),
        createElement('div', [
          '响应式操作：',
          createElement('button', {
            on: {
              'click': () => {
                this.$forceUpdate()
              }
            }
          }, 'this.$forceUpdate()'),
          createElement('button', {
            on: {
              'click': () => {
                this.todos.push({ title: 'push and look', id: this.todos.length + 1 })
              }
            }
          }, 'Push'),
          createElement('button', {
            on: {
              'click': () => {
                this.todos.unshift({ title: 'unshift and look', id: this.todos.length > 0 ? this.todos[0].id - 1 : 1 })
              }
            }
          }, 'Unshift'),
          createElement('button', {
            on: {
              'click': () => {
                this.todos.pop()
              }
            }
          }, 'Pop'),
          createElement('button', {
            on: {
              'click': () => {
                this.todos.shift()
              }
            }
          }, 'shift'),
          createElement('button', {
            on: {
              'click': () => {
                this.todos.reverse()
              }
            }
          }, 'Reverse'),
          createElement('button', {
            on: {
              'click': () => {
                if (this.todos.length > 0) {
                  if (this.todos[0].id < this.todos[this.todos.length - 1].id) {
                    this.todos.sort((a, b) => a.id < b.id ? 1 : -1)
                  } else {
                    this.todos.sort((a, b) => a.id < b.id ? -1 : 1)
                  }
                }
              }
            }
          }, 'Sort'),
          createElement('button', {
            on: {
              'click': () => {
                if (this.todos[0]) {
                  this.todos[0].title = "下标寻找元素，修改属性"
                }
              }
            }
          }, 'this.todos[0].title = "下标寻找元素，修改属性"'),
          createElement('button', {
            on: {
              'click': () => {
                this.$set(this.todos, 0, { id: 1, title: '$set修改数组第一个元素' })
              }
            }
          }, '$set修改数组某个元素'),
          createElement('button', {
            on: {
              'click': () => {
                this.$set(this.todos[0], 'title', '$set修改数组第一个元素的title属性')
              }
            }
          }, '$set修改数组内对象的属性')
        ]),
        createElement('div', [
          '非响应式操作：',
          createElement('button', {
            on: {
              'click': () => {
                this.todos[0] = { id: -100, title: "下标修改" }
              }
            }
          }, 'this.todos[0] = {id:-100,title:"下标修改"}'),
          createElement('button', {
            on: {
              'click': () => {
                this.todos[this.todos.length] = { id: 100, title: "下标新增" }
              }
            }
          }, 'this.todos[this.todos.length] = {id:100,title:"下标新增"}'),
          createElement('button', {
            on: {
              'click': () => {
                delete this.todos[this.todos.length - 1]
              }
            }
          }, 'delete this.todos[this.todos.length-1]'),
          createElement('button', {
            on: {
              'click': () => {
                if (this.todos[0]) {
                  this.todos[0].other = "哈哈"
                }
              }
            }
          }, 'this.todos[0].other = "哈哈"'),
          createElement('button', {
            on: {
              'click': () => {
                if (this.todos[0]) {
                  delete this.todos[0].title
                }
              }
            }
          }, 'delete this.todos[0].title'),
        ]),
        createElement(
          'form',
          { on: { submit: this.submitForm } },
          [
            createElement('label', { attrs: { for: 'new-todo' } }, 'Add a todo:'),
            createElement('input', {
              domProps: {
                value: this.newTodoText
              },
              on: { '!click': this.submitForm, input: this.textChanged },
              attrs: { id: 'new-todo', placeholder: 'E.g. Feed the cat' }
            }),
            createElement('button', { on: { 'click': this.addItem } }, 'Add'),
          ]
        ),
        createElement(
          'ul',
          this.todos.map((item) => {
            return createElement(
              ToDoItem,
              {
                props: { title: item.title, id: item.id },
                on: { 'remove': this.removeItem }
              }
            )
          })
        )
      ]
    )
  }

  textChanged(event) {
    this.newTodoText2 = event.target.value
  }
  removeItem(index) {
    const i = this.todos.findIndex(e => e.id === index)
    this.todos.splice(i, 1)
  }
  addItem(event) {
    if (this.newTodoText2.length === 0) {
      return
    }
    const len = this.todos.length
    this.todos.push({
      id: len > 0 ? this.todos[len - 1].id + 1 : 1,
      title: this.newTodoText2
    })
    this.newTodoText2 = ''
    event.stopPropagation()
  }
  submitForm(event) {
    event.preventDefault()
  }

  constructor() {
    super()
  }
}

