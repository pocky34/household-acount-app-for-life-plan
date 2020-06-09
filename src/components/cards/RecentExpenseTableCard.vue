<template>
  <v-card>
    <v-card-title class="font-weight-bold pb-0">直近の支出状況</v-card-title>
    <v-container>
      <v-data-table dense :headers="headers" :items="items" disable-sort hide-default-footer />
    </v-container>
  </v-card>
</template>

<script>
const ItemDB = require("../../MockDB.js");

export default {
  data () {
    return {
      headers: [
        { text: "日付", value: 'date' },
        { text: "費目", value: 'expenseType' },
        { text: "金額", value: 'expense' },
        { text: "メモ", value: 'memo' },
      ],
      items: []
    };
  },
  created () {
    this.items = ItemDB.findAll();
  }
}
</script>

<style>
</style>