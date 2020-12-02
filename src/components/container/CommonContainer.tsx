import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class CommonContainer extends Vue {
  @Prop({ default: () => 'div' }) private tagName
  @Prop({ default: () => ['common-container'] }) private classes

  data() {
    return {}
  }


  protected render(createElement) {
    const { tagName, classes } = this
    const { top, left, center, right, bottom } = this.$scopedSlots
    return createElement(tagName,
      {
        class: classes,
        style: { display: 'flex', flexDirection: 'column', flexWrap: 'nowrap' },
      },
      Object.keys(this.$scopedSlots).length === 0 ? [createElement('div', { style: { background: 'gray', height: '100%' } }, '请向插槽插入内容')] :
        [
          top && top({ content: '上' }),
          createElement('div',
            {
              class: 'body',
              style: { display: 'flex', flexWrap: 'nowrap', flex: 1 }
            },
            [
              left && left({ content: '左' }),
              center && center({ content: '中' }),
              right && right({ content: '右' })
            ]),
          bottom && bottom({ content: '下' }),
        ]
    )
  }

  constructor() {
    super()
  }
}

