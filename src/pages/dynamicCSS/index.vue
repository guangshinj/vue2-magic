<template>
  <div class="css-container">
    <h3 class="title">说明：这里定义了容器组件，通过插槽和外部CSS定义不同的布局</h3>
    <div>边框CSS为：{{borderCSS}}</div>
    <div>
      <input type="checkbox"
             id="bgColor"
             v-model="selecting">
      <label for="bgColor"
             class="item">添加背景色(对象语法), 数组语法可以F12验证（class="list"的div又追加了{{classes.join(' ')}}）</label>
    </div>
    <div class="board"
         :class="{bg:selecting}">
      <div class="row">
        <label for="size"
               class="item">边框宽度:</label>
        <input type="text"
               maxlength="2"
               v-model="size"
               class="size">px
      </div>

      <div class="row">
        <label for="styles"
               class="item">边框类型:</label>
        <div :key="item"
             id="styles"
             class="items"
             v-for="item in styles">
          <input type="radio"
                 :id="item"
                 name="style"
                 :value="item"
                 v-model="checkedStyle"
                 class="radio">
          <label class="item"
                 :for="item">{{item}}</label>
        </div>
      </div>
      <div class="row">
        <label for="items"
               class="item">边框颜色:</label>
        <div :key="item"
             id="items"
             class="items"
             v-for="item in items"
             :style="{color:item}">
          <input type="radio"
                 :id="item"
                 name="color"
                 :value="item"
                 v-model="checkedColor"
                 :style="{backgroundColor:item}"
                 class="radio">
          <label class="item"
                 :for="item">{{item}}</label>
        </div>
      </div>
    </div>
    <div class="list"
         :class="classes"
         :style="{border:borderCSS}">
      <CommonContainer class="layout"
                       :tagName="'p'"
                       :classes="['test']">
        <template #top="data">
          <div class="top">{{data.content}}</div>
        </template>
        <template #center="data">
          <div class="center">{{data.content}}</div>
        </template>
        <template #bottom="data">
          <div class="bottom">{{data.content}}</div>
        </template>
      </CommonContainer>
      <CommonContainer class="layout">
        <template #left="data">
          <div class="left">{{data.content}}</div>
        </template>
        <template #center="data">
          <div class="center">{{data.content}}</div>
        </template>
        <template #right="data">
          <div class="right">{{data.content}}</div>
        </template>
      </CommonContainer>
      <CommonContainer class="layout">
        <template #top="data">
          <div class="top">{{data.content}}</div>
        </template>
        <template #bottom="data">
          <div class="bottom">{{data.content}}</div>
        </template>
        <template #left="data">
          <div class="left">{{data.content}}</div>
        </template>
        <template #center="data">
          <div class="center">{{data.content}}</div>
        </template>
        <template #right="data">
          <div class="right">{{data.content}}</div>
        </template>
      </CommonContainer>
      <CommonContainer class="layout"></CommonContainer>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import CommonContainer from '@/components/container/CommonContainer.tsx'

@Component({
  components: { CommonContainer }
})
export default class Class extends Vue {
  @Prop() private msg!: string
  private size!: number
  private checkedStyle!: string
  private checkedColor!: string
  data() {
    return {
      classes: ['class-a', 'class-b'],
      selecting: false,
      size: 4,
      checkedStyle: 'none',
      checkedColor: 'red',
      styles: ['none', 'groove', 'solid', 'dotted', 'dashed'],
      items: ['red', 'green', 'blue', 'black']
    }
  }

  get borderCSS() {
    return this.size + 'px ' + this.checkedStyle + ' ' + this.checkedColor
  }
}
</script>

<style scoped lang="less">
.css-container {
  .title {
    margin-bottom: 20px;
  }
  .board {
    margin-bottom: 20px;
    .item {
      display: inline-block;
      margin-right: 10px;
      cursor: pointer;
    }
    .items {
      display: inline-block;
    }
    .size {
      width: 20px;
    }
  }
  .bg {
    background-color: #eee;
  }
  .list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;

    .layout {
      width: 400px;
      height: 100px;
      background-color: #fff;
      margin: 0 20px 20px 0;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .left {
        width: 100px;
        flex: none;
        background-color: #eee;
      }
      .right {
        width: 100px;
        flex: none;
        background-color: #ccc;
      }
      .top {
        height: 30px;
        background-color: lightcoral;
      }
      .center {
        flex: 1;
        background-color: lightgoldenrodyellow;
      }
      .bottom {
        height: 30px;
        background-color: lightblue;
      }
    }
  }
}
</style>
