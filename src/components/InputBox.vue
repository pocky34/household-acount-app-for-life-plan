<template>
  <div>
    <table border="1" class="input-table">
      <tbody>
        <tr>
          <td>
            <input placeholder="日付を入力" v-model.trim="date"/>
          </td>
          <td>
            <input placeholder="費目を入力" v-model.trim="expenseType"/>
          </td>
          <td>
            <input placeholder="金額を入力" v-model.trim="expense"/>
          </td>
          <td>
            <input placeholder="メモを入力" v-model.trim="memo"/>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="button-container">
      <div class="inputbox-button">
        <Button title="追加" :onClick="post" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  components: {
    Button
  },
  props: {
    onPost: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      date: "",
      expenseType: "",
      expense: "",
      memo: ""
    }
  },
  methods: {
    post() {
      const newItem = this.createItem();
      this.onPost(newItem);
      this.date = "";
      this.expenseType = "";
      this.expense = "";
      this.memo = "";
    },
    createItem() {
      return {
        date: this.date,
        expenseType: this.expenseType,
        expense: parseInt(this.expense, 10),
        memo: this.memo
      }
    }
  }
};
</script>

<style scoped>
.input-table {
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
}
td {
  border: 1px solid #88888888;
}
input {
  border: 0;
  padding: 0;
  width: 120px;
}
.button-container {
  margin-left: auto;
  margin-right: auto;
  width: 493px;
}
.inputbox-button {
  margin: 0 0 0 auto;
}
</style>