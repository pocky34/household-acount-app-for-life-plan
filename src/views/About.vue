<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <description-card />
      </v-col>
      <v-col cols="12">
        <usage-card />
      </v-col>
      <v-col cols="12">
        <technical-stack-card />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DescriptionCard from '@/components/cards/DescriptionCard.vue';
import UsageCard from '@/components/cards/UsageCard.vue';
import TechnicalStackCard from '@/components/cards/TechnicalStackCard.vue';

export default {
  components: {
    DescriptionCard,
    UsageCard,
    TechnicalStackCard,
  },
};
</script>