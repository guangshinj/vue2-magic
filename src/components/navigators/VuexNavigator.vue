<template>
  <div class="">
    <h3>二级导航栏</h3>
    <ul>
      <li>
        <router-link to="/vuex/vuex-using">Vuex</router-link>
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
h1 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
