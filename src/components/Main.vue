<template>
  <main class="main-container">
    <h2>年間予算の達成状況</h2>
    <div class="chart-container">
      <chart :items="sortedItems"></chart>
    </div>
    <h2>直近の支出状況</h2>
    <ItemList :items="sortedItems" />
  </main>
</template>

<script>
import ItemList from "@/components/ItemList.vue";
import Chart from "./Chart.vue";
const ItemDB = require('../MockDB');

export default {
  components: {
    ItemList,
    Chart
  },
  data() {
    return {
      items: []
    };
  },
  computed: {
    sortedItems() {
      return ItemDB.findAll();
    }
  },
  methods: {
    onPost(item) {
      this.items.push(item);
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