<template>
  <div id="app">
    <SmartNavigator />
    <router-view class="body"></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SmartNavigator from '@/components/navigators/SmartNavigator.vue'
@Component({
  components: {
    SmartNavigator
  }
})
export default class App extends Vue {}
</script>

<style lang="less">
html {
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  body {
    height: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 10px;
    background: #ddd;
    h1,
    h2,
    h3,
    h4,
    h5 {
      margin: 0;
    }
    ul {
      margin-block-start: 0;
      margin-block-end: 0;
      padding-inline-start: 0;
    }
    #app {
      height: 100%;
      box-sizing: border-box;
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: left;
      color: #2c3e50;
      display: flex;
      flex-direction: column;

      > .body {
        flex-grow: 1;
        box-sizing: border-box;
        overflow: auto;
        background: #fff;
        .container {
          // height: calc(100% - 30px);
          box-sizing: border-box;

          h3 {
            width: 150px;
            text-align: right;
            opacity: 0.7;
          }
        }
      }
    }
  }
}
</style>
