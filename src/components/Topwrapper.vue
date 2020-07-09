<template>
  <div class="topwrapper">
    <header class="intro">
      <h1 class="intro__title">
        {{ title }}
        <p class="intro__tagline">{{ tagline }}, updates every 10 minutes</p>
      </h1>
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
