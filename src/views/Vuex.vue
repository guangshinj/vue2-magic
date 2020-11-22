<template>
  <div class="about">
    <VuexNavigator />
    <router-view></router-view>
  </div>
</template>
<script>
import VuexNavigator from '@/components/navigators/VuexNavigator.vue'
export default {
  components: {
    VuexNavigator
  },
};
</script>