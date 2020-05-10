<template>
  <div class="chart-container">
    <line-chart :chartdata="chartdata" :options="options" />
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
  data() {
    return {
      chartdata: {
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
        datasets: []
      },
      options: {
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "月"
              }
            }
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "金額"
              },
              ticks: {
                beginAtZero: true,
                stepSize: 50000 
              }
            }
          ]
        }
      }
    };
  },
  created() {
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

    this.chartdata.datasets = [
      {
        label: "年間予算",
        data: budgetData,
        borderColor: "#EE0000",
        borderWidth: 1,
        fill: false,
        type: "line"
      },
      {
        label: "ガイドライン",
        data: guideLineData,
        borderColor: "#00EE00",
        borderWidth: 1,
        fill: false,
        type: "line"
      },
      {
        label: "実績累積",
        data: cumulativeExpenseData,
        borderColor: "#0000EE",
        borderWidth: 1,
        fill: false,
        type: "line",
        lineTension: 0
      }
    ];
  }
};
</script>

<style>
</style>