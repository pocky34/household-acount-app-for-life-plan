<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  name: "chart",
  data() {
    return {
      data: {
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
        datasets: [
          {
            label: "年間予算",
            data: [
              800000,
              800000,
              800000,
              800000,
              800000,
              800000,
              800000,
              800000,
              800000,
              800000,
              800000,
              800000,
              800000
            ],
            borderColor: "#EE0000",
            borderWidth: 1,
            fill: false,
            type: "line"
          },
          {
            label: "ガイドライン",
            data: [
              0,
              66667,
              133333,
              200000,
              266667,
              333333,
              400000,
              466667,
              533333,
              600000,
              666667,
              733333,
              800000
            ],
            borderColor: "#00EE00",
            borderWidth: 1,
            fill: false,
            type: "line"
          },
          {
            label: "実績累積",
            data: [0, 300000, 330000, 360000],
            borderColor: "#0000EE",
            borderWidth: 1,
            fill: false,
            type: "line",
            lineTension: 0
          }
        ]
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
  mounted() {
    this.renderChart(this.data, this.options);
  }
};
</script>