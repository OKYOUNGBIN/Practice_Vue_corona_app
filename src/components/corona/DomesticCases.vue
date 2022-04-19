<template>
  <div>
    <ul class="graph-list">
      <li>
        <h3>누적 확진/사망자 추이</h3>
        <ChartGraph />
      </li>
    </ul>
  </div>
</template>

<script>
import ChartGraph from "../charts/ChartGraph.vue";
export default {
  name: "DomesticCases",
  components: { ChartGraph },
};
</script>

<style></style>
