<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <description-card />
      </v-col>
      <v-col cols="12">
        <technical-stack-card />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DescriptionCard from '@/components/cards/DescriptionCard.vue';
import TechnicalStackCard from '@/components/cards/TechnicalStackCard.vue';

export default {
  components: {
    DescriptionCard,
    TechnicalStackCard,
  },
};
</script>