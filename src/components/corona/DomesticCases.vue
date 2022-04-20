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
import coronaMixin from "@/mixins/coronaMixin";
import moment from "moment";
export default {
  name: "DomesticCases",
  mixins: [coronaMixin],
  components: { ChartGraph },
  data() {
    return {
      caseKey: 0,
      compareKey: 0,
      monthDifference: 4,
      domesitcData: [],
    };
  },
  mounted() {
    this.fetchDomestic();
  },
  methods: {
    async fetchDomestic() {
      const to = moment().format("YYYY-MM-DD");
      const from = moment()
        .subtract(this.monthDifference, "months")
        .format("YYYY-MM-DD");
      const params = {
        to,
        from,
      };
      const url = "https://api.covid19api.com/live/country/south-korea";
      const domestic = await this.fetchData("get", url, params);
      this.setDomesticData(domestic);
    },
    setDomesticData(domestic) {
      let pick = 0;
      const targetDates = [];
      while (pick <= this.monthDifference) {
        targetDates.push(
          moment().subtract(pick, "months").utc().format().split("T")[0]
        );
        pick++;
      }
      this.domesitcData = domestic.filter((dom) =>
        targetDates.includes(dom.Date.split("T")[0])
      );
      console.log(this.domesitcData, "domestic data");
    },
  },
};
</script>

<style scoped>
.graph-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
  list-style: none;
}
</style>
