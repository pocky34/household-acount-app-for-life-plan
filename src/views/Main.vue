<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <monthly-expense-chart-card />
      </v-col>
      <v-col cols="12">
        <recent-expense-table-card />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MonthlyExpenseChartCard from '@/components/cards/MonthlyExpenseChartCard.vue';
import RecentExpenseTableCard from '@/components/cards/RecentExpenseTableCard.vue';

export default {
  components: {
    MonthlyExpenseChartCard,
    RecentExpenseTableCard,
  },
};
</script>

<style scoped>
</style>