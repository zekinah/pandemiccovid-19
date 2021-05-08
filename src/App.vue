<template>
  <div id="app">
    <!-- <dntoogle /> -->
    <div class="switch-wrapper">
      <div class="toggle-wrapper">
        <input id="switch" type="checkbox" checked @click="toggle" />
        <label for="switch" id="toggle">Toggle</label>
      </div>
    </div>
    <About />
    <router-view :dark="dark" />
  </div>
</template>

<script>
// import dntoogle from "./components/Dntoogle.vue";
import About from "./components/About.vue";
export default {
  name: "app",
  data: () => ({
    dark: true
  }),
  methods: {
    toggle() {
      if (this.dark) {
        this.dark = false;
        this.setlightMode();
      } else {
        this.dark = true;
        this.setdarkMode();
      }
    },
    setlightMode() {
      document.querySelector("body").classList.add("light-mode");
      this.darkMode = false;
    },
    setdarkMode() {
      document.querySelector("body").classList.remove("light-mode");
      this.darkMode = true;
    }
  },
  components: {
    // dntoogle,
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
