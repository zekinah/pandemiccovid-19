<template>
  <div class="home">
    <Topwrapper
      title="Covid-19 Tracker"
      tagline="Realtime tracker of a pandemic"
    />
    <div class="overall">
      <h3 class="overall_cases"><ICountUp :endVal="parseInt(totalcases)" /></h3>
      <h5 class="overall_cases_title">Total Cases</h5>
      <div class="field">
        <div class="control has-icons-left">
          <div class="select is-info">
            <select v-model="bycountry" @change="viewPerCountry()">
              <option :value="selectall">All Countries</option>
              <option
                v-for="a in bycountries"
                :key="a.countryInfo._id"
                :value="a"
                >{{ a.country }}</option
              >
            </select>
            <span class="icon is-left">
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                />
              </svg>
            </span>
          </div>
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
    <TodayCases :data="todaydata" />
    <div id="visual">
      <div class="visual__container container">
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <div class="tile is-child box">
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
            </div>
          </div>
          <div class="tile is-6 is-vertical is-parent">
            <div class="tile is-child box">
              <p class="title">Daily New Cases in 30 Days</p>
              <p class="subtitle">
                (Covid-19 data sourced from Johns Hopkins University, updated
                every 10 minutes)
              </p>
              <div class="content">
                <DailyCasesGraph :data="history.timeline" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import api from "@/Api";
import Topwrapper from "@/components/Topwrapper.vue";
import CardCases from "@/components/CardCases.vue";
import Map from "@/components/Map.vue";
import TodayCases from "@/components/TodayCases.vue";
import TableCases from "@/components/TableCases.vue";
import DailyCasesGraph from "@/components/DailyCasesGraph.vue";
import SiteFooter from "@/components/SiteFooter.vue";
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
      timeline: {}
    },
    country: {},
    totalcases: 0,
    totalpopulation: 0,
    totalaffected: 0,
    active: 0,
    critical: 0,
    recovered: 0,
    deaths: 0,
    todaydata: {}
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
      this.todaydata = this.all;
      this.totalcases = this.all.cases;
      this.totalpopulation = this.all.population;
      this.totalaffected = this.all.affectedCountries;
      this.active = this.all.active;
      this.critical = this.all.critical;
      this.recovered = this.all.recovered;
      this.deaths = this.all.deaths;
    },
    bycountry: async function() {
      let iso = this.bycountry.countryInfo.iso2;
      if (iso == "all") {
        this.history.timeline = await api.getDailyCases();
        this.getAll();
      } else {
        this.history = await api.getDailyCasesByCountry(iso);
        this.country = await api.getByCountry(iso);
        this.todaydata = this.country;
      }
    }
  },
  components: {
    Topwrapper,
    CardCases,
    Map,
    TodayCases,
    TableCases,
    DailyCasesGraph,
    SiteFooter,
    ICountUp
  }
};
</script>
