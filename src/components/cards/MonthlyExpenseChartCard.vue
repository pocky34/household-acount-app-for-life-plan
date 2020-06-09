<template>
  <v-card>
    <v-card-title class="font-weight-bold pb-0">年間予算の達成状況</v-card-title>
    <v-container>
      <monthly-expense-chart :budget="budget" :expenses="expenses" />
    </v-container>
  </v-card>
</template>

<script>
import MonthlyExpenseChart from "@/components/MonthlyExpenseChart.vue";
const ItemDB = require("../../MockDB.js");

export default {
  components: {
    MonthlyExpenseChart,
  },
  data () {
    return {
      budget: 500000,
      expenses: []
    };
  },
  methods: {
    update () {
      let expenses = new Array(12).fill(0);
      for (const item of ItemDB.findAll()) {
        const dateObj = new Date(item.date);
        expenses[dateObj.getMonth()] += item.expense;
      }
      // まだ入力のない月のデータを削除
      for (let month = 12; month >= 0; month--) {
        if (expenses[month - 1] == 0) {
          expenses.pop();
        } else {
          break;
        }
      }
      this.expenses = expenses;
    },
    onPost (item) {
      ItemDB.create(item);
      this.update();
    }
  },
  created () {
    this.update();
  }
}
</script>

<style>
</style>