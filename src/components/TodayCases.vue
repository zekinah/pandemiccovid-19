<template>
  <div id="today-cases">
    <div class="today-cases__container container">
      <div class="columns is-desktop">
        <div class="column">
          <article class="box">
            <p class="title">Today Active</p>
            <p class="subtitle">(+casesperOneMillion)</p>
            <p>
              <icountup :endVal="parseInt(today.casesPerOneMillion)" />
              <span class="info">(+{{ today.casesPerOneMillion }})</span>
            </p>
          </article>
        </div>
        <div class="column">
          <article class="box">
            <p class="title">Tested</p>
            <p class="subtitle">(+testsperOneMillion)</p>
            <p>
              <icountup :endVal="parseInt(today.tests)" />
              <span class="info">(+{{ today.testsPerOneMillion }})</span>
            </p>
          </article>
        </div>
        <div class="column">
          <article class="box">
            <p class="title">Today Recovered</p>
            <p class="subtitle">(+recoveredperOneMillion)</p>
            <p>
              <icountup :endVal="parseInt(today.todayRecovered)" />
              <span class="info">(+{{ today.recoveredPerOneMillion }})</span>
            </p>
          </article>
        </div>
        <div class="column">
          <article class="box">
            <p class="title">Today Death</p>
            <p class="subtitle">(+deathperOneMillion)</p>
            <p>
              <icountup :endVal="parseInt(today.todayDeaths)" />
              <span class="info">(+{{ today.deathsPerOneMillion }})</span>
            </p>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/Api";
import icountup from "vue-countup-v2";
export default {
  name: "todaycases",
  props: ["data"],
  data: () => ({
    today: {}
  }),
  async created() {
    this.today = await api.getAllCases();
  },
  watch: {
    data(val) {
      this.today = val;
    }
  },
  components: {
    icountup
  }
};
</script>
