<template>
  <div id="app">
    <TopNavigator class="head" />
    <router-view class="body"></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TopNavigator from '@/components/navigators/TopNavigator.vue'
@Component({
  components: {
    TopNavigator
  }
})
export default class App extends Vue {}
</script>

<style lang="less">
html {
  height: 100%;
  box-sizing: border-box;
  body {
    height: 100%;
    box-sizing: border-box;
    margin: 0;
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
      .nav-container {
        display: flex;
        align-items: center;
        background: #ddd;
        ul {
          list-style-type: none;
          padding-left: 20px;
        }
        li {
          display: inline-block;
          margin: 0 10px;
        }
        a {
          font-size: 1.2rem;
          color: #42b983;
        }
      }
    }
    .head {
      height: 60px;
      flex: none;
      padding: 0 10px 10px;
      box-sizing: border-box;
    }
    .body {
      flex-grow: 1;
      padding: 0 10px 10px;
      .nav-container {
        padding-left: 40px;
        height: 30px;
        line-height: 30px;
        opacity: 0.8;
      }
      .container {
        height: calc(100% - 30px);
        background: rgb(245, 241, 241);
        padding: 10px;
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
</style>
