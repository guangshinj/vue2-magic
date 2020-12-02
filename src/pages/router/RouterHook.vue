<template>
  <div class="container">
    路由钩子
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class RouterHook extends Vue {
  @Prop() private msg!: string
}
</script>

<style scoped lang="less">
.container {
  width: 100%;
}
</style>
