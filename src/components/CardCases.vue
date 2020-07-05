<template>
  <div class="container">
    <div class="columns is-desktop">
      <div class="column">
        <div class="card">
          <div class="card-content">
            <p class="subtitle is-6">Active</p>
            <p class="title"><ICountUp :endVal="active" /></p>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-content">
            <p class="subtitle is-6">Critical</p>
            <p class="title"><ICountUp :endVal="critical" /></p>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-content">
            <p class="subtitle is-6">Recovered</p>
            <p class="title"><ICountUp :endVal="recovered" /></p>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-content">
            <p class="subtitle is-6">Deaths</p>
            <p class="title"><ICountUp :endVal="deaths" /></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ICountUp from "vue-countup-v2";
export default {
  name: "cardcases",
  props: {
    active: Number,
    critical: Number,
    recovered: Number,
    deaths: Number
  },
  components: {
    ICountUp
  }
};
</script>
