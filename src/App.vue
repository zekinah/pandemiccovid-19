<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import api from "./Api";
export default {
  name: "App",
  data: () => ({
    cases: {
      total_confirmed: 0,
      total_recovered: 0,
      total_death: 0,
      data: []
    },
    casesbycountry: []
  }),
  async created() {
    this.loading = true;
    this.cases = await api.getAllCases();
    this.casesbycountry = await api.getbyCountries();
    this.loading = false;

    console.log(this.cases);
  },
  methods: {
    getAllPokemons() {}
  }
};
</script>
