<template>
  <v-card>
    <v-card-title class="font-weight-bold pb-0">支出の入力</v-card-title>
    <v-card-text>
      <v-container>
        <v-form ref="form" v-model="valid">
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="date"
                :rules="[v => !!v || 'Item is required']"
                label="日付"
                type="date"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-select
                v-model="expenseType"
                :items="expenseTypes"
                :rules="[v => !!v || 'Item is required']"
                label="費目"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="expense"
                :rules="[v => !!v || 'Item is required']"
                label="金額"
                suffix="円"
                type="number"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="memo" label="メモ"></v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="secondary" @click="cancel">キャンセル</v-btn>
      <v-btn :disabled="!valid" color="success" @click="post">追加</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
const ItemDB = require("../../MockDB.js");

export default {
  props: {
    onPost: {
      type: Function,
      required: false
    },
    onCancel: {
      type: Function,
      required: false
    }
  },
  data () {
    return {
      valid: false,
      expenseTypes: [],
      date: "",
      expenseType: "",
      expense: "",
      memo: ""
    }
  },
  methods: {
    post () {
      const newItem = this.createItem();
      ItemDB.create(newItem);
      this.date = "";
      this.expenseType = "";
      this.expense = "";
      this.memo = "";

      if (this.onPost) {
        this.onPost();
      }
    },
    cancel () {
      if (this.onCancel) {
        this.onCancel();
      }
    },
    createItem () {
      return {
        date: this.date,
        expenseType: this.expenseType,
        expense: parseInt(this.expense, 10),
        memo: this.memo
      }
    }
  },
  created: function () {
    this.expenseTypes = ItemDB.getExpenseTypes();
  }
};
</script>

<style>
</style>