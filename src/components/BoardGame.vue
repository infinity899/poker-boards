<template>
  <div>
    <span v-for="(card, index) in board" :key="index">
      {{ `${card} ` }}
    </span>
  </div>
  <div>
    {{ options }}
  </div>
</template>

<script setup>
import { ref } from 'vue';

import { Deck } from '../helpers/deck.js';

const board = ref([]);
const options = ref(null);

const deck = new Deck();
board.value = [...deck.getCards(5)];
options.value = Hand.solve(board.value, 'standard', false).descr;
</script>

<style scoped>

</style>
