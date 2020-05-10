<template>
  <tr>
    <td class='item-date'>{{ date }}</td>
    <td class='item-expense-detail'>{{ expenseDetail }}</td>
    <td class='item-summary'>{{ summary }}</td>
    <td class='item-expense'>{{ expense }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      required: true,
    },
    expenseDetail: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    expense: {
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