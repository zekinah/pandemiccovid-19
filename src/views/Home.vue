<template>
  <div class="home">
    <Topwrapper
      title="Covid-19 Tracker"
      tagline="Realtime tracker of the pandemic named Covid-19"
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
                <p class="title">Places</p>
                <p class="subtitle">With even more content</p>
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
                  <p class="title">Fatality by Ages</p>
                  <p class="subtitle">Top box</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">Fatality by Sex</p>
                  <p class="subtitle">With an image</p>
                </article>
              </div>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">Daily New Cases</p>
                <p class="subtitle">Aligned with the right column</p>
                <div class="content"></div>
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
import Map from "@/components/Map.vue";
export default {
  name: "Home",
  data: () => ({
    totalcases: 0,
    active: 0,
    critical: 0,
    recovered: 0,
    deaths: 0
  }),
  async created() {
    this.loading = true;
    this.all = await api.getAllCases();
    this.loading = false;
    this.totalcases = this.all.cases;
    this.active = this.all.active;
    this.critical = this.all.critical;
    this.recovered = this.all.recovered;
    this.deaths = this.all.deaths;
  },
  components: {
    Topwrapper,
    Totalcases,
    CardCases,
    TableCases,
    Map
  }
};
</script>
