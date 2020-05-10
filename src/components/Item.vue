<template>
  <tr>
    <td class='item-date'>{{ date }}</td>
    <td class='item-expense-detail'>{{ expenseType }}</td>
    <td class='item-expense'>{{ expense }}</td>
    <td class='item-memo'>{{ memo }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      required: true,
    },
    expenseType: {
      type: String,
      required: true,
    },
    expense: {
      type: Number,
      required: true,
    },
    memo: {
      type: String,
      required: true,
    }
  },
}
</script>

<style scoped>
td {
  border: 1px solid #88888888;
}
</style>