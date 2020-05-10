<template>
<main class='main-container'>
  <div>ここに表を持ってくる</div>
  <ItemList :items="reversedItems" />
</main> 
</template>

<script>
import ItemList from "@/components/ItemList.vue";

export default {
  components: {
    ItemList,
  },
  data() {
    return {
      items: [
        { date: "date", expenseDetail: "expenseDetail", summary: "summary", expense: "expense" },
        { date: "yyyy/mm/dd", expenseDetail: "hoge", summary: "fuga", expense: "¥1,980" }
      ]
    }
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
}
</script>

<style scoped>
.main-container {
  width: calc(100% - 200px);
  flex: 1;
  position: absolute;
  left: 200px;
}

.text-box-separator {
  height: 10px;
  background-color: #bbb;
  border: none;
  margin: 8px 0px 0px 0px;
}


</style>