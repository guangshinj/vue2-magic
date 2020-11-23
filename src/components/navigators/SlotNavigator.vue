<template>
  <div class="nav-container">
    <h2>二级导航栏</h2>
    <ul>
      <li>
        <router-link to="/slot/named-slot">具名插槽</router-link>
      </li>
      <li>
        <router-link to="/slot/scoped-slot">作用域插槽</router-link>
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
