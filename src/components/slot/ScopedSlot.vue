<template>
  <div class="container">
    作用域插槽
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ScopedSlot extends Vue {
  @Prop() private msg!: string
}
</script>

<style scoped lang="less">
.container {
  width: 100%;
}
</style>
