<template>
  <div class="container">
    <section>
      <Player>
        <template v-slot>
          <FilteringItem :totalItems="items">
            <template v-slot:item="slotProps">
              <span v-if="slotProps.data.checked">✓</span>
              {{ slotProps.data.name }}
            </template>
          </FilteringItem>
        </template>
        <template v-slot:left="slotProps">
          <div>
            <h5>内容来自子组件，遍历这个对象</h5>
            <ul class="iterator1">
              <li :key="item"
                  v-for="item in slotProps.data"
                  class="item">{{item}}</li>
            </ul>
          </div>
        </template>
        <template v-slot:right="slotProps">
          <div>
            <h5>内容来自子组件，遍历这个数组</h5>
            <ul class="iterator2">
              <li :key="item"
                  v-for="item in slotProps.data"
                  class="item">{{item}}</li>
            </ul>
          </div>
        </template>
        <template v-slot:bottom="slotProps">
          {{slotProps.data}}
        </template>
      </Player>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Player from '@/components/container/ContainerLayout.vue'
import FilteringItem from '@/components/item-list/FilteringItem.vue'
@Component({
  components: {
    Player,
    FilteringItem
  }
})
export default class ScopedSlot extends Vue {
  @Prop() private in!: string
  private items!: Array<{ [key: string]: any }>
  constructor() {
    super()
    this.items = [
      { name: '我是不是你最深爱的人', checked: false },
      { name: 'Sunny', checked: false },
      { name: '天使的翅膀', checked: false },
      { name: '最美的期待', checked: false },
      { name: '凉凉', checked: false },
      { name: '起风了', checked: false },
      { name: "We don't talk anymore", checked: false },
      { name: '原来你也在这里', checked: false }
    ]
  }
}
</script>

<style scoped lang="less">
.container {
  width: 100%;
  ul {
    color: red;
    list-style-type: none;

    &:nth-last-child(1) {
      list-style-type: decimal;
    }
  }

  .iterator1,
  .iterator2 {
    padding-left: 20px;
  }
}
</style>
