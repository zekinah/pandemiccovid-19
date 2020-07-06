<template>
  <div class="topwrapper">
    <header class="intro">
      <h1 class="intro__title">
        {{ title }}
        <p class="intro__tagline">{{ tagline }}</p>
      </h1>
      <p>Global Population: <ICountUp :endVal="total" /></p>
      <p>Affected Countries: <ICountUp :endVal="affected" /></p>
    </header>
  </div>
</template>
<script>
import ICountUp from "vue-countup-v2";
export default {
  name: "top",
  props: {
    title: String,
    tagline: String,
    total: Number,
    affected: Number
  },
  components: {
    ICountUp
  }
};
</script>
