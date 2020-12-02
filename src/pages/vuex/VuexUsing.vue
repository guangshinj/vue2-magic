<template>
  <div class="container">
    vuex的使用
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class VuexUsing extends Vue {
  @Prop() private msg!: string
}
</script>

<style scoped lang="less">
.container {
  width: 100%;
}
</style>
