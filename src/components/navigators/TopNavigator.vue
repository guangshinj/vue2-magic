<template>
  <div class="">
    <h1>一级导航栏</h1>
    <ul>
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/router">路由</router-link>
      </li>
      <li>
        <router-link to="/vuex">vuex</router-link>
      </li>
      <li>
        <router-link to="/slot">插槽</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class TopNavigator extends Vue {
  @Prop() private msg!: string
}
</script>

<style scoped lang="less">
h1 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
