<template>
  <div id="today-cases">
    <div class="today-cases__container container">
      <div class="columns is-desktop">
        <div class="column">
          <article class="box">
            <p class="title">Today Cases</p>
            <p class="subtitle">(+casesperOneMillion)</p>
            <p>
              {{ Number(dataT.todayCases).toLocaleString() }}
              <span class="info">(+{{ dataT.casesPerOneMillion }})</span>
            </p>
          </article>
        </div>
        <div class="column">
          <article class="box">
            <p class="title">Tested</p>
            <p class="subtitle">(+testsperOneMillion)</p>
            <p>
              {{ Number(dataT.tests).toLocaleString() }}
              <span class="info">(+{{ dataT.testsPerOneMillion }})</span>
            </p>
          </article>
        </div>
        <div class="column">
          <article class="box">
            <p class="title">Today Recovered</p>
            <p class="subtitle">(+recoveredperOneMillion)</p>
            <p>
              {{ Number(dataT.todayRecovered).toLocaleString() }}
              <span class="info">(+{{ dataT.recoveredPerOneMillion }})</span>
            </p>
          </article>
        </div>
        <div class="column">
          <article class="box">
            <p class="title">Today Deaths</p>
            <p class="subtitle">(+deathperOneMillion)</p>
            <p>
              {{ Number(dataT.todayDeaths).toLocaleString() }}
              <span class="info">(+{{ dataT.deathsPerOneMillion }})</span>
            </p>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/Api";
// import ICountUp from "vue-countup-v2";
export default {
  name: "todaycases",
  props: ["data"],
  data: () => ({
    dataT: []
  }),
  async created() {
    this.dataT = await api.getAllCases();
  },
  watch: {
    data(val) {
      this.dataT = val;
    }
  },
  components: {
    // ICountUp
  }
};
</script>
