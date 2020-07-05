<template>
  <div class="home">
    <Topwrapper msg="Covid-19 Tracker" />
    <Totalcases :total="totalcases" />
    <CardCases
      :active="active"
      :critical="critical"
      :recovered="recovered"
      :deaths="deaths"
    />
  </div>
</template>

<script>
import api from "@/Api";
import Topwrapper from "@/components/Topwrapper.vue";
import Totalcases from "@/components/TotalCases.vue";
import CardCases from "@/components/CardCases.vue";
export default {
  name: "Home",
  data: () => ({
    totalcases: 0,
    active: 0,
    critical: 0,
    recovered: 0,
    deaths: 0,
    casesbycountry: []
  }),
  async created() {
    this.loading = true;
    this.all = await api.getAllCases();
    this.casesbycountry = await api.getbyCountries();
    this.loading = false;
    this.totalcases = this.all.cases;
    this.active = this.all.critical;
    this.critical = this.all.critical;
    this.recovered = this.all.recovered;
    this.deaths = this.all.deaths;
  },
  methods: {
    getAllPokemons() {}
  },
  components: {
    Topwrapper,
    Totalcases,
    CardCases
  }
};
</script>
