


<template>
  <div class="home">
    <div class="">
      <button @click="debounceNow(1,3,5,7)">debounce now</button>
      <button @click="debounceLater">debounce later</button>
      <button @click="throttleNow(1,3,5,7)">throttle now</button>
      <button @click="throttleLater">throttle later</button>
    </div>
  </div>
</template>
    
<script>
import { debounce, throttle } from '@/utils/debounce.ts'

export default {
  name: 'Home',
  components: {
  },
  mounted () {
    console.info("mounted")
  },
  methods: {
    debounceNow: debounce(function (...rest) {
      console.info("debounce Now：", this, ...rest, new Date())
    }, 1000),
    debounceLater: debounce(function (...rest) {
      console.info("debounce Later：", this, ...rest, new Date())
    }, 1000, false),
    throttleNow: throttle(function (...rest) {
      console.info("throttle Now：", this, ...rest, new Date())
    }, 1000),
    throttleLater: throttle(function (...rest) {
      console.info("throttle Later：", this, ...rest, new Date())
    }, 1000, false),
  }
};
</script>
<style scoped lang="less">
.home {
  background: rgb(245, 241, 241);
  padding: 10px;
  box-sizing: border-box;
}
</style>
