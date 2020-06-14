<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <recent-expense-table-card />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import RecentExpenseTableCard from '@/components/cards/RecentExpenseTableCard.vue';

export default {
  components: {
    RecentExpenseTableCard,
  }

};
</script>