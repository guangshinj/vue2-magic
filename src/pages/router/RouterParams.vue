<template>
  <div class="container">
    路由传参
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class RouterParams extends Vue {
  @Prop() private msg!: string
}
</script>

<style scoped lang="less">
.container {
  width: 100%;
}
</style>
