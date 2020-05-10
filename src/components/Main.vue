<template>
  <main class="main-container">
    <h2>年間予算の達成状況</h2>
    <monthly-expense-chart :budget="budget" :expenses="expenses" />
    <h2>直近の支出状況</h2>
    <ItemList :items="reversedItems" />
  </main>
</template>

<script>
import ItemList from "@/components/ItemList.vue";
import MonthlyExpenseChart from "./MonthlyExpenseChart.vue"
const ItemDB = require("../MockDB");

export default {
  components: {
    ItemList,
    MonthlyExpenseChart,
  },
  data() {
   return {
     budget: 500000,
     expenses: [160000, 20000, 10000]
   };
  },
  computed: {
    reversedItems() {
      return ItemDB.findAll().slice().reverse();
    },
    getBudget() {
      return 800000;
    },
    getExpenses() {
      return [0, 300000, 20000, 10000];
    }
  }
};
</script>

<style scoped>
.main-container {
  width: calc(100% - 200px);
  flex: 1;
  position: absolute;
  left: 200px;
}
.chart-container {
  margin: 20px;
}
</style>