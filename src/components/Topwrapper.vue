<template>
  <div class="topwrapper">
    <header class="intro">
      <h1 class="intro__title">{{ msg }}</h1>
      <h5 class="intro__tagline">
        Realtime tracker of the pandemic name Covid-19
      </h5>
    </header>
  </div>
</template>

<script>
export default {
  name: "top",
  props: {
    msg: String
  }
};
</script>
