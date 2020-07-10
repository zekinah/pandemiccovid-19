<template>
  <div id="card-cases">
    <div class="card-cases__container container">
      <div class="columns is-desktop">
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="subtitle is-6">Active</p>
              <p class="title"><icountup :endVal="parseInt(data.active)" /></p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="subtitle is-6">Critical</p>
              <p class="title">
                <icountup :endVal="parseInt(data.critical)" />
              </p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="subtitle is-6">Recovered</p>
              <p class="title">
                <icountup :endVal="parseInt(data.recovered)" />
              </p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="subtitle is-6">Deaths</p>
              <p class="title"><icountup :endVal="parseInt(data.deaths)" /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import icountup from "vue-countup-v2";
export default {
  name: "cardcases",
  props: ["data"],
  components: {
    icountup
  }
};
</script>
