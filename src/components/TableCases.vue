<template>
  <div id="tablecases">
    <p>Population: <ICountUp :endVal="parseInt(total)" /></p>
    <p>Affected Countries: <ICountUp :endVal="parseInt(affected)" /></p>
    <div class="tablecases__container table-container">
      <table class="table is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Country</th>
            <th>Total Cases</th>
            <th>Recovered</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cases in casesbycountry" :key="cases.iso2">
            <td>
              <p class="shrink">
                <img
                  :src="cases.countryInfo.flag"
                  :alt="cases.countryInfo.iso2"
                />
                {{ cases.country }}
              </p>
            </td>
            <td><ICountUp :endVal="parseInt(cases.cases)" /></td>
            <td><ICountUp :endVal="parseInt(cases.recovered)" /></td>
            <td><ICountUp :endVal="parseInt(cases.deaths)" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import api from "@/Api";
import ICountUp from "vue-countup-v2";

export default {
  name: "tablecases",
  props: ["total", "affected"],
  data: () => ({
    casesbycountry: {}
  }),
  async created() {
    this.casesbycountry = await api.getbyCountries();
  },
  components: {
    ICountUp
  }
};
</script>
