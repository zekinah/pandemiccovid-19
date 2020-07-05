<template>
  <div id="app">
    <dntoogle />
    <router-view />
  </div>
</template>

<script>
import dntoogle from "./components/Dntoogle.vue";
export default {
  name: "app",
  components: {
    dntoogle
  }
};
</script>
