<template>
  <div id="app">
    <router-view />
    <dntoogle />
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
