<template>
  <table border="1" class="item-table">
    <thead>
      <tr>
        <th class="item-table-header">日付</th>
        <th class="item-table-header">費目詳細</th>
        <th class="item-table-header">摘要</th>
        <th class="item-table-header">金額</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(item, index) in items">
        <Item
          :key="index"
          :date="item.date"
          :expenseDetail="item.expenseDetail"
          :summary="item.summary"
          :expense="item.expense"
        />
      </template>
    </tbody>
  </table>
</template>

<script>
import Item from "@/components/Item.vue";

export default {
  components: {
    Item
  },
  props: {
    items: {
      type: Array,
      required: true,
      validator: function(items) {
        return items.every(item => {
          if (typeof item.date !== "string") {
            return false;
          }
          return true;
        });
      }
    }
  }
};
</script>

<style scoped>
.item-table {
  border-collapse: collapse;
  width: 100%;
  margin: 10px;
}
.item-table-header {
  background-color:lightblue;
  border: 1px solid #88888888;
  vertical-align: middle;
}
</style>