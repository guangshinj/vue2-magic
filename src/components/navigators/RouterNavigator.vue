<template>
  <div class="nav-container">
    <h2>二级导航栏</h2>
    <ul>
      <li>
        <router-link to="/router/router-hook">路由钩子</router-link>
      </li>
      <li>
        <router-link to="/router/router-params">路由传递参数</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class SlotNavigator extends Vue {
  @Prop() private msg!: string
}
</script>

<style scoped lang="less">
</style>
