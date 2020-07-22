<template>
  <div class="about-popup">
    <div class="btn-about" @click="showModal = true" title="About">
      <span class="icon icon-info"></span>
    </div>
    <div id="modal" class="modal" :class="showModal == true ? 'is-active' : ''">
      <div class="modal-background" @click="showModal = false"></div>
      <div class="modal-content">
        <div class="box">
          <div class="modal-head">
            <p class="modal-title">About</p>
            <button
              class="delete"
              aria-label="close"
              @click="showModal = false"
            ></button>
          </div>
          <div class="card-content">
            <div class="about__content">
              <p class="title is-1">Covid-19 Tracker</p>
              <p class="mb-3">
                A Web app and PWA compatible worldwide tracker of Pandemic
                Covid-19, with visualization of graph, table, and map. The data
                updates always 10minutes.
              </p>
              <p class="mb-3">
                API Used:
                <a :href="diseaseapi" target="_blank">disease.sh</a>
              </p>
              <p class="mb-3">
                Data Source:
                <a :href="jhu" target="_blank">Johns Hopkins University</a>, and
                <a :href="worldometer" target="_blank">Worldometers</a>
              </p>
              <p class="mb-3">
                Built with <a :href="vuejs" target="_blank">Vue JS</a>,
                <a :href="bulma" target="_blank">Bulma</a>,
                <a :href="leaftet" target="_blank">Leaflet</a>,
                <a :href="chart" target="_blank">Chart</a>, and
                <a :href="countup" target="_blank">Count Up</a>
              </p>
              <p class="text-subtitle-2">Find this project useful?</p>
              <p class="mb-5">
                Support it by joining
                <a :href="stargazers" target="_blank">stargazers</a> for this
                repository and
                <a :href="github" target="_blank">follow me</a> for my next
                creations!
              </p>
            </div>
            <div class="about__footer">
              <p class="is-size-7 has-text-centered">
                <strong>
                  Made with ❤️ by
                  <a :href="website" target="_blank">Zekinah Lecaros</a
                  >.</strong
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardcases",
  data: () => ({
    showModal: false,
    vuejs: "https://vuejs.org/",
    bulma: "http://bulma.io/",
    diseaseapi: "https://github.com/disease-sh/API",
    jhu: "https://github.com/CSSEGISandData/COVID-19",
    worldometer: "https://www.worldometers.info/coronavirus/",
    leaftet: "https://github.com/vue-leaflet/Vue2Leaflet",
    chart: "https://github.com/apertureless/vue-chartjs",
    countup: "https://github.com/xlsdg/vue-countup-v2",
    github: "https://github.com/zekinah/pandemiccovid-19",
    stargazers: "https://github.com/zekinah/pandemiccovid-19/stargazers",
    website: "http://zekinahlecaros.com/"
  })
};
</script>
