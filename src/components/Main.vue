<template>
  <main class="main-container">
    <h2>年間予算の達成状況</h2>
    <monthly-expense-chart :budget="budget" :expenses="expenses" />
    <h2>直近の支出状況</h2>
    <item-list :items="items" />
    <input-box :onPost="onPost" />
  </main>
</template>

<script>
import MonthlyExpenseChart from "./MonthlyExpenseChart.vue";
import ItemList from "./ItemList.vue";
import InputBox from "./InputBox.vue";
const ItemDB = require("../MockDB");

export default {
  components: {
    MonthlyExpenseChart,
    ItemList,
    InputBox
  },
  data() {
    return {
      budget: 500000,
      expenses: [],
      items: []
    };
  },
  methods: {
    update() {
      this.items = ItemDB.findAll();

      let expenses = new Array(12).fill(0);
      for (const item of this.items) {
        const dateObj = new Date(item.date);
        expenses[dateObj.getMonth()] += item.expense;
      }
      // まだ入力のない月のデータを削除
      for (let month = 12; month >= 0; month--){
        if(expenses[month-1] == 0){
          expenses.pop();
        }else{
          break;
        }
      }
      this.expenses = expenses;
    },
    onPost(item) {
      ItemDB.create(item);
      this.update();
    }
  },
  created() {
    this.update();
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