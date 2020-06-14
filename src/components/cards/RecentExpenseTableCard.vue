<template>
  <v-card>
    <v-card-title class="font-weight-bold pb-0">直近の支出状況</v-card-title>
    <v-container>
      <v-data-table dense :headers="headers" :items="items" disable-sort hide-default-footer />
    </v-container>
    <v-container>
      <v-row dense>
        <v-col cols="10">
          <v-spacer />
        </v-col>
        <v-col cols="2">
          <v-dialog v-model="dialog" persistent>
            <template v-slot:activator="{ on, attrs }">
              <v-btn fab color="secondary" v-bind="attrs" v-on="on">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </template>
            <input-expense-card :onPost="onPost" :onCancel="onCancel" />
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import InputExpenseCard from '@/components/cards/InputExpenseCard.vue';
const ItemDB = require("../../MockDB.js");

export default {
  components: {
    InputExpenseCard,
  },
  methods: {
    onPost () {
      console.log('onPost');
      this.dialog = false;
      this.items = ItemDB.findAll();
    },
    onCancel () {
      console.log('onCancel')
      this.dialog = false;
    }
  },
  data () {
    return {
      headers: [
        { text: "日付", value: 'date' },
        { text: "費目", value: 'expenseType' },
        { text: "金額", value: 'expense' },
        { text: "メモ", value: 'memo' },
      ],
      items: [],
      dialog: false,
    };
  },
  created () {
    this.items = ItemDB.findAll();
  }
}
</script>

<style>
</style>