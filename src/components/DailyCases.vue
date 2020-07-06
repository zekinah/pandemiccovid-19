<template>
  <div id="daily-cases chart">
    <apexchart
      ref="chart"
      width="100%"
      type="area"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import api from "@/Api";
import VueApexCharts from "vue-apexcharts";
export default {
  name: "daily",
  data() {
    return {
      dailyCases: [],
      options: {
        chart: {
          id: "vuechart-example",
          toolbar: {
            show: false
          }
        },
        xaxis: {}
      },
      series: []
    };
  },
  async created() {
    this.dailyCases = await api.getDailyCases();
  },
  watch: {
    dailyCases(val) {
      const casesdate = Object.getOwnPropertyNames(val.cases);
      const casestotal = Object.values(val.cases);
      this.$refs.chart.updateOptions({
        xaxis: {
          type: "datetime",
          categories: casesdate
        }
      });

      const series = [
        {
          name: "Daily Total Cases",
          data: casestotal
        }
      ];
      this.$refs.chart.updateSeries(series);
    }
  },
  components: {
    apexchart: VueApexCharts
  }
};
</script>
