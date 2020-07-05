<template>
  <div class="home">
    <Topwrapper msg="Covid-19 Tracker" />
  </div>
</template>

<script>
// @ is an alias to /src
import Topwrapper from "@/components/Topwrapper.vue";

export default {
  name: "Home",
  components: {
    Topwrapper
  }
};
</script>
