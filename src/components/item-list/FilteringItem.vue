<template>
  <div class="filter-item-container">
    <label for="keyword">关键字</label><input name="keyword"
           v-model="keyword">
    <ul v-show="filteredItems.length > 0"
        class="iterator">
      <li :key="item.name"
          v-for="item in filteredItems"
          @click="clickItem(item)"
          :class="item.checked ? 'checked' :''"
          class="item">
        <slot name="item"
              :data="item"><span>{{item.name}}</span></slot>
      </li>
    </ul>
    <ul class="empty"
        v-show="filteredItems.length === 0">
      暂无
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component
export default class FilteringItem extends Vue {
  @Prop() private totalItems!: Array<{ [key: string]: any }>
  keyword = ''
  filteredItems: Array<{ [key: string]: any }>

  @Watch('keyword')
  keywordChanged(val: string) {
    if (this.totalItems) {
      this.filteredItems = this.totalItems.filter(
        (e) => e.name && e.name.includes(val)
      )
    }
  }

  constructor() {
    super()
    this.filteredItems = this.totalItems || []
  }

  clickItem(item) {
    this.filteredItems.forEach((e) => {
      if (e.name === item.name) {
        e.checked = true
      } else {
        e.checked = false
      }
    })
    this.filteredItems = [...this.filteredItems]
  }
}
</script>

<style scoped lang="less">
.filter-item-container {
  width: 100%;
  padding: 20px;
  input {
    margin-left: 10px;
    height: 20px;
  }

  .iterator {
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    overflow-x: hidden;
    overflow-y: auto;

    li {
      display: inline-block;
      padding: 10px;
      color: #fff;
      line-height: 20px;
      background: chocolate;
      margin: 10px 20px 0 0;
      border-radius: 20px;
      cursor: pointer;

      &.checked {
        background: #aaa;
        color: #333;
      }
    }
  }
}
</style>
