<template>
  <div class="nav-container">
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
</style>
