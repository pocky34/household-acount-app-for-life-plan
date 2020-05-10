<template>
  <main class="main-container">
    <h2>年間予算の達成状況</h2>
    <div class="chart-container">
      <chart></chart>
    </div>
    <h2>直近の支出状況</h2>
    <ItemList :items="reversedItems" />
  </main>
</template>

<script>
import ItemList from "@/components/ItemList.vue";
import Chart from "./Chart.vue";

export default {
  components: {
    ItemList,
    Chart
  },
  data() {
    return {
      items: [
        {
          date: "date",
          expenseDetail: "expenseDetail",
          summary: "summary",
          expense: "expense"
        },
        {
          date: "yyyy/mm/dd",
          expenseDetail: "hoge",
          summary: "fuga",
          expense: "¥1,980"
        }
      ]
    };
  },
  computed: {
    reversedItems() {
      return this.items.slice().reverse();
    }
  },
  methods: {
    onPost(item) {
      this.item.push(item);
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