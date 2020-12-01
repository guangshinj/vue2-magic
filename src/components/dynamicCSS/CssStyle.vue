<template>
  <div class="container">
    <section>
      数据响应style
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class Class extends Vue {
  @Prop() private msg!: string
}
</script>

<style scoped lang="less">
.container {
  width: 100%;
}
</style>
