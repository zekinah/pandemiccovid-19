<template>
  <div class="overall">
    <h3 class="overall_cases"><ICountUp :endVal="total" /></h3>
    <h5 class="overall_cases_title">Total Cases World Wide</h5>
  </div>
</template>

<script>
import ICountUp from "vue-countup-v2";
export default {
  name: "overall",
  props: {
    total: Number
  },
  components: {
    ICountUp
  }
};
</script>
