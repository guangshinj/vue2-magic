<template>
  <div class="about">
    <RouterNavigator />
    <router-view></router-view>
  </div>
</template>
<script>
import RouterNavigator from '@/components/navigators/RouterNavigator.vue'
export default {
  components: {
    RouterNavigator
  },
};
</script>