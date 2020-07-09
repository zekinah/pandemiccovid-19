<template>
  <div class="home">
    <Topwrapper
      title="Covid-19 Tracker"
      tagline="Realtime tracker of a pandemic"
    />
    <div class="overall">
      <h3 class="overall_cases"><ICountUp :endVal="parseInt(totalcases)" /></h3>
      <h5 class="overall_cases_title">Total Cases</h5>
      <div class="control has-icons-left">
        <div class="select is-small">
          <select v-model="bycountry" @change="viewPerCountry()">
            <option :value="selectall" selected>All Countries</option>
            <option
              v-for="a in bycountries"
              :key="a.countryInfo._id"
              :value="a"
              >{{ a.country }}</option
            >
          </select>
        </div>
      </div>
    </div>
    <CardCases
      :active="active"
      :critical="critical"
      :recovered="recovered"
      :deaths="deaths"
    />
    <Map :data="country" />
    <div id="cases">
      <div class="cases__container container">
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <div class="content">
                <p class="title">Countries Affected</p>
                <p class="subtitle">
                  (Covid-19 data sourced from Worldometers, updated every 10
                  minutes)
                </p>
                <div class="content">
                  <TableCases
                    :total="totalpopulation"
                    :affected="totalaffected"
                  />
                </div>
              </div>
            </article>
          </div>
          <div class="tile is-vertical is-6">
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <article class="tile is-child box">
                  <p class="title">Today Recovered</p>
                  <p class="subtitle">(+recoveredperOneMillion)</p>
                  <p>
                    <ICountUp :endVal="parseInt(tRecovered)" />
                    <span class="info">(+{{ perRecovered }})</span>
                  </p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">Today Death</p>
                  <p class="subtitle">(+deathperOneMillion)</p>
                  <p>
                    <ICountUp :endVal="parseInt(tDeaths)" />
                    <span class="info">(+{{ perDeaths }})</span>
                  </p>
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
                  <DailyCases :data="history.timeline.cases" />
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
import CardCases from "@/components/CardCases.vue";
import TableCases from "@/components/TableCases.vue";
import DailyCases from "@/components/DailyCases.vue";
import Map from "@/components/Map.vue";
import ICountUp from "vue-countup-v2";

export default {
  name: "Home",
  data: () => ({
    selectall: {
      countryInfo: {
        iso2: "all"
      }
    },
    all: {},
    bycountries: {},
    bycountry: {},
    history: {
      timeline: {
        cases: {}
      }
    },
    country: {},
    totalcases: 0,
    totalpopulation: 0,
    totalaffected: 0,
    active: 0,
    critical: 0,
    recovered: 0,
    deaths: 0,
    tRecovered: 0,
    tDeaths: 0,
    perRecovered: 0,
    perDeaths: 0,
    selectedGen: null
  }),
  created() {
    this.getAll();
    this.getCountries();
  },
  methods: {
    async getAll() {
      this.all = await api.getAllCases();
    },
    async getCountries() {
      this.bycountries = await api.getbyCountries();
    },
    async viewPerCountry() {
      let iso = this.bycountry.countryInfo.iso2;
      if (iso == "all") {
        this.getAll();
      } else {
        this.all = await api.getByCountry(iso);
      }
    }
  },
  watch: {
    all: function() {
      this.totalcases = this.all.cases;
      this.totalpopulation = this.all.population;
      this.totalaffected = this.all.affectedCountries;
      this.active = this.all.active;
      this.critical = this.all.critical;
      this.recovered = this.all.recovered;
      this.deaths = this.all.deaths;
      this.tRecovered = this.all.todayRecovered;
      this.tDeaths = this.all.todayDeaths;
      this.perRecovered = this.all.recoveredPerOneMillion;
      this.perDeaths = this.all.deathsPerOneMillion;
    },
    bycountry: async function() {
      let iso = this.bycountry.countryInfo.iso2;
      if (iso == "all") {
        this.getAll();
      } else {
        this.history = await api.getDailyCasesByCountry(iso);
        this.country = await api.getByCountry(iso);
      }
    }
  },
  components: {
    Topwrapper,
    CardCases,
    TableCases,
    Map,
    DailyCases,
    ICountUp
  }
};
</script>
