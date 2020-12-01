<template>
  <div class="home">
    homeless
  </div>
</template>
    
<script>

export default {
  name: 'Home',
  components: {
  },
  mounted () {
    console.info(this.$router.options.routes, this.$router.getMatchedComponents('home'))
    console.info(this.$route)
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
