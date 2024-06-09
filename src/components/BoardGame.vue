<script setup>
import {ref} from 'vue';
let board = ref([]);
let options = ref(null)
import {Deck} from "../helpers/deck.js";
let deck = new Deck();
board.value = [...deck.getCards(5)];
options.value = Hand.solve(board.value, 'standard').descr
</script>

<template>
  <div>
    <span v-for="card in board">
      {{ card + ' ' }}
    </span>
  </div>
  <div>
    {{ options }}
  </div>
</template>

<style scoped>

</style>
