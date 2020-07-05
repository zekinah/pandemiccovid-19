<template>
  <div class="topwrapper">
    <header class="intro">
      <h1 class="intro__title">{{ title }}</h1>
      <h5 class="intro__tagline">{{ tagline }}</h5>
    </header>
  </div>
</template>
<script>
export default {
  name: "top",
  props: {
    title: String,
    tagline: String
  }
};
</script>
