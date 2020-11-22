<template>
  <div class="about">
    <SlotNavigator />
    <router-view></router-view>
  </div>
</template>
<script>
import SlotNavigator from '@/components/navigators/SlotNavigator.vue'
export default {
  components: {
    SlotNavigator
  },
};
</script>