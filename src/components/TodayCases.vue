<template>
  <div id="today-cases">
    <div class="today-cases__container container">
      <div class="columns is-desktop">
        <div class="column">
          <article class="box">
            <p class="title">Today Active</p>
            <p class="subtitle">(+casesperOneMillion)</p>
            <p>
              <icountup :endVal="parseInt(data.casesPerOneMillion)" />
              <span class="info">(+{{ data.casesPerOneMillion }})</span>
            </p>
          </article>
        </div>
        <div class="column">
          <article class="box">
            <p class="title">Tested</p>
            <p class="subtitle">(+testsperOneMillion)</p>
            <p>
              <icountup :endVal="parseInt(data.tests)" />
              <span class="info">(+{{ data.testsPerOneMillion }})</span>
            </p>
          </article>
        </div>
        <div class="column">
          <article class="box">
            <p class="title">Today Recovered</p>
            <p class="subtitle">(+recoveredperOneMillion)</p>
            <p>
              <icountup :endVal="parseInt(data.todayRecovered)" />
              <span class="info">(+{{ data.recoveredPerOneMillion }})</span>
            </p>
          </article>
        </div>
        <div class="column">
          <article class="box">
            <p class="title">Today Death</p>
            <p class="subtitle">(+deathperOneMillion)</p>
            <p>
              <icountup :endVal="parseInt(data.todayDeaths)" />
              <span class="info">(+{{ data.deathsPerOneMillion }})</span>
            </p>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import icountup from "vue-countup-v2";
export default {
  name: "todaycases",
  props: ["data"],
  components: {
    icountup
  }
};
</script>
