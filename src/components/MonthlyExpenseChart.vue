<template>
  <div class="chart-container">
    <line-chart :chart-data="getDataCollection()" :options="options" :height="240" />
  </div>
</template>

<script>
import LineChart from "./LineChart.vue";

export default {
  components: {
    LineChart
  },
  props: {
    budget: {
      type: Number,
      required: true
    },
    expenses: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      options: {
        responsive: true,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                max: 600000,
                stepSize: 100000
              }
            }
          ]
        },
        legend: {
          labels: {
            filter: function (item) {
              return item.text != 'ガイドライン';
            }
          }
        }
      }
    };
  },
  methods: {
    getDataCollection () {
      const budgetData = new Array(13).fill(this.budget);
      let guideLineData = [];
      for (let month = 0; month <= 12; month++) {
        guideLineData.push((this.budget / 12) * month);
      }
      let cumulativeExpenseData = [0]; // 開始月用に0を入れておく
      let currentTotal = 0;
      for (const expense of this.expenses) {
        cumulativeExpenseData.push(currentTotal + expense);
        currentTotal += expense;
      }

      const newDatasets = [
        {
          label: "年間予算",
          data: budgetData,
          borderColor: "#ff4444",
          borderWidth: 1,
          pointRadius: 0,
          fill: false,
          type: "line"
        },
        {
          label: "ガイドライン",
          data: guideLineData,
          borderColor: "#888888",
          borderWidth: 1,
          borderDash: [4, 2],
          pointRadius: 0,
          fill: false,
          type: "line"
        },
        {
          label: "実績累積",
          data: cumulativeExpenseData,
          borderColor: "#007e33",
          borderWidth: 1,
          backgroundColor: "#00c851",
          fill: true,
          type: "line",
          lineTension: 0
        }
      ];
      return {
        labels: [
          "開始",
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月"
        ],
        datasets: newDatasets
      };
    },
  },
};
</script>

<style scoped>
</style>