<template>
  <div class="content-container">
    <div class="top">
      <slot>Set header here!</slot>
    </div>
    <div class="core">
      <div class="left">
        <slot name="left"
              :data="leftData">
          <div class="photo">
            <p>这里是默认图片</p>
          </div>
        </slot>
      </div>
      <div class="right">
        <slot name="right"
              :data="rightData">
          <img src="/img/icons/android-chrome-512x512.png">
        </slot>
      </div>
    </div>
    <div class="bottom">
      <slot :data="bottomData"
            name="bottom">Set footer here!</slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Player extends Vue {
  @Prop() private in!: string

  data() {
    return {
      leftData: {
        name: '周杰伦',
        age: '40',
        job: 'singer'
      },
      rightData: ['北京', '上海', '广州', '深圳'],
      bottomData: 'footer here!',
      details: {
        title: '屋顶',
        content: ['a', 'bc', 'def'],
        url: ''
      }
    }
  }
  constructor() {
    super()
  }
}
</script>

<style scoped lang="less">
.content-container {
  background: #4d4d4b;
  .core {
    padding: 3em;
    display: flex;
    .left {
      background: #ddd;
      flex: none;
      width: 40%;
      display: flex;
      justify-content: center;
      .photo {
        width: 80%;
        padding-bottom: 80%;
        height: 0;
        background: red;
      }
    }
    .right {
      background: #ccc;
      flex-grow: 1;

      img {
        width: 100%;
        // padding-top: 100%;
      }
    }
  }
  .top,
  .bottom {
    min-height: 50px;
    background: #bbb;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
