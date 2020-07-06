<template>
  <div class="home">
    <Topwrapper
      title="Covid-19 Tracker"
      tagline="Realtime tracker of a pandemic"
      :total="totalpopulation"
      :affected="totalaffected"
    />
    <Totalcases :total="totalcases" />
    <CardCases
      :active="active"
      :critical="critical"
      :recovered="recovered"
      :deaths="deaths"
    />
    <Map />
    <div id="cases">
      <div class="cases__container container">
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <div class="content">
                <p class="title">All Countries</p>
                <p class="subtitle">
                  (Covid-19 data sourced from Worldometers, updated every 10
                  minutes)
                </p>
                <div class="content">
                  <TableCases />
                </div>
              </div>
            </article>
          </div>
          <div class="tile is-vertical is-6">
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <article class="tile is-child box">
                  <p class="title">Today Recovered</p>
                  <ICountUp :endVal="tRecovered" />
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">Today Death</p>
                  <ICountUp :endVal="tDeaths" />
                </article>
              </div>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">Daily New Cases in 30 Days</p>
                <p class="subtitle">
                  (Covid-19 data sourced from Johns Hopkins University, updated
                  every 10 minutes)
                </p>
                <div class="content">
                  <DailyCases />
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/Api";
import Topwrapper from "@/components/Topwrapper.vue";
import Totalcases from "@/components/TotalCases.vue";
import CardCases from "@/components/CardCases.vue";
import TableCases from "@/components/TableCases.vue";
import DailyCases from "@/components/DailyCases.vue";
import Map from "@/components/Map.vue";
import ICountUp from "vue-countup-v2";

export default {
  name: "Home",
  data: () => ({
    totalcases: 0,
    totalpopulation: 0,
    totalaffected: 0,
    active: 0,
    critical: 0,
    recovered: 0,
    deaths: 0,
    todayRecovered: 0,
    todayDeaths: 0
  }),
  async created() {
    this.loading = true;
    this.all = await api.getAllCases();
    this.loading = false;
    this.totalcases = this.all.cases;
    this.totalpopulation = this.all.population;
    this.totalaffected = this.all.affectedCountries;
    this.active = this.all.active;
    this.critical = this.all.critical;
    this.recovered = this.all.recovered;
    this.deaths = this.all.deaths;
    this.tRecovered = this.all.todayRecovered;
    this.tDeaths = this.all.todayDeaths;
  },
  components: {
    Topwrapper,
    Totalcases,
    CardCases,
    TableCases,
    Map,
    DailyCases,
    ICountUp
  }
};
</script>
