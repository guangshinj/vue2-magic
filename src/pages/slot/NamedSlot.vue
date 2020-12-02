<template>
  <div class="container">
    <section>
      <ContainerLayout>
        <template>
          头部是个默认插槽，通过不带属性的template标签包裹覆盖默认插槽的内容(加个v-slot属性也可以,但加v-slot:defalut可能失效)
        </template>
        <template #left>
          左侧区域，插槽的默认内容被这句话覆盖了。<br />v-slot:可以缩写成#,但#不可以和动态插槽组合使用。
        </template>
        <template #right></template>
        <template v-slot:[dynamicSlotName2]>底部区域，插槽的默认内容被这句话覆盖了。</template>
      </ContainerLayout>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import ContainerLayout from '@/components/container/ContainerLayout.vue'

@Component({
  components: {
    ContainerLayout
  }
})
export default class NamedSlot extends Vue {
  @Prop() private msg!: string
  dynamicSlotName1 = 'left'
  dynamicSlotName2 = 'bottom'
}
</script>

<style scoped lang="less">
.container {
  width: 100%;
  ul {
    color: red;
    list-style-type: decimal;
  }
}
</style>
