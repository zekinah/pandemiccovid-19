<template>
  <div id="app">
    <dntoogle />
    <About />
    <router-view />
  </div>
</template>

<script>
import dntoogle from "./components/Dntoogle.vue";
import About from "./components/About.vue";
export default {
  name: "app",
  components: {
    dntoogle,
    About
  },
  metaInfo() {
    return {
      title: "Pandemic Covid-19 Tracker",
      meta: [
        {
          name: "description",
          content:
            "Worldwide Tracker of Pandemic Covid-19, with visualization of graph, table, and map"
        },
        { property: "og:title", content: "Pandemic Covid-19 Tracker" },
        {
          property: "og:description",
          content:
            "Worldwide Tracker of Pandemic Covid-19, with visualization of graph, table, and map"
        },
        { property: "og:site_name", content: "Pandemic Covid-19 Tracker" },
        {
          property: "og:image",
          content: "https://pandemiccovid19.netlify.app/img/covid19tracker.png"
        },
        { property: "og:type", content: "website" },
        { name: "robots", content: "index,follow" }
      ]
    };
  }
};
</script>
