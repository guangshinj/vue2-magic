<template>
  <div class="container"
       @scroll.passive="scroll">
    <h2>prevent修饰符</h2>
    <form action="">
      <button @click="btnClick">提交表单（刷新页面）</button>
      <button @click.prevent="btnClick">提交表单（无刷新）</button>
    </form>
    <h2>once修饰符</h2>
    <div>
      <button @click="btnClick">修饰符反复有效</button>
      <button @click.once="btnClick">修饰符一次有效</button>
    </div>
    <h2>stop和capture修饰符</h2>
    <div class="groups"
         @click="btnClick">
      <button @click="btnClick">默认修饰符</button>
      <button @click.stop="btnClick">阻止冒泡</button>
      <button @click.capture="btnClick">捕获修饰符</button>
    </div>
    <h2>self修饰符</h2>
    <div class="groups"
         @click.self="btnClick">
      <button @click="btnClick">默认修饰符(带self的父元素不会触发修饰符)</button>
    </div>
    <h2>prevent、self、stop、once修饰符（第二次点击触发了表单提交，这太奇怪了）</h2>
    <form class="groups"
          @click="btnClick">
      <button @click.prevent.self.stop.once.left.right.middle="btnClick">@click.prevent.self.stop.once</button>
    </form>
    <h2>按键修饰符（可以动态添加单独的修饰符，但动态追加按键码未成功）</h2>
    <label>keyup修饰符</label><input v-on:[keyupEvent]="keyup" /><br />
    <label>动态keyup修饰符+动态enter按键码</label><input v-on:[keyupEnterEvent]="keyup" /><span>失败</span><br />
    <label>静态keyup修饰符+动态enter按键码</label><input v-on:keyup[enterEvent]="keyup" /><span>失败</span><br />
    <label>enter按键码</label><input v-on:keyup.enter="keyup" /><br />
    <label>esc按键码</label><input v-on:keyup.esc="keyup" /><br />
    <label>tab按键码</label><input v-on:keyup.tab.prevent="keyup" /><span>注意：tab键进入获得焦点才会触发tab修饰符</span><br />
    <label>space按键码</label><input v-on:keyup.space="keyup" /><br />
    <label>backspace按键码</label><input v-on:keyup.delete="keyup" />注意：修饰符是delete<br />
    <label>组合按键码</label><input v-on:keyup.prevent.enter.esc.tab.space.delete.up.down.left.right.page-up.page-down.home.end="keyup" /><span>注意：tab键进入获得焦点才会触发tab修饰符</span><br />
    <h2>系统修饰键（默认结合鼠标左键）</h2>
    <button @click.ctrl="btnClick">ctrl</button>
    <button @click.shift="btnClick">shift</button>
    <button @click.alt="btnClick">alt</button>
    <button @click.meta="btnClick">meta</button>
    <button @click.left="btnClick">mouse left</button>
    <button @click.middle="btnClick">mouse middle</button>
    <button @click.right="btnClick">mouse right</button>
    <h2>.exact修饰键(ctrl + mouse right)</h2>
    <button @click.ctrl.right.exact="btnClick">ctrl + mouse right</button><span>注意：多按、少按、错按都不会触发</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { debounce, throttle } from '@/utils/debounce.ts'

@Component({
  components: {}
})
export default class Events extends Vue {
  @Prop() private input!: any
  private keyupEvent = 'keyup'
  private keyupEnterEvent = 'keyup.enter' // 失败
  private enterEvent = '.enter' // 失败

  scroll() {
    const ele = event.target as HTMLElement
    console.info(
      '移动端passive修饰符会使滚动流畅，实际高度',
      ele.scrollHeight,
      '可视窗口上方隐藏的内容的高度',
      ele.scrollTop
    )
  }

  btnClick($event, ...rest) {
    console.info(($event.currentTarget as HTMLElement).innerHTML, rest)
  }

  keyup($event) {
    console.info('Active Code:', $event.code)
  }

  constructor() {
    super()
    this.scroll = debounce(this.scroll, 400)
    this.keyup = throttle(this.keyup, 400)
  }
}
</script>

<style scoped lang="less">
.groups {
  background: #eee;
  cursor: pointer;
  padding: 10px 0;
}

label {
  display: inline-block;
  width: 300px;
  text-align: right;
  padding: 0 10px;
  &::after {
    content: ':';
  }
}
</style>
