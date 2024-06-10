<template>
  <div class="flex-container">
    <GamePoints />
    <GameBoardCards :board="localState.board" />
  </div>
  <div class="options-container">
    <div v-for="(opt, index) in localState.options" :key="index" class="option-item" @click="evaluateOption(opt)">
      {{ opt }}
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

import { Deck } from '../helpers/deck.js';
import { gameModes, points, results } from '../helpers/constants.js';
import { useGameStore } from '../stores/game';
import GameBoardCards from './GameBoardCards.vue';
import GamePoints from './GamePoints.vue';

const gameStore = useGameStore();

const localState = ref({
  board: [],
  options: [],
  correctOption: '',
  intervalId: null,
});

function generateOptions() {
  const falseDeck = new Deck();
  // 4 random boards from a new deck to generate false options
  const falseBoards = [[...falseDeck.getCards(5)], [...falseDeck.getCards(5)], [...falseDeck.getCards(5)], [...falseDeck.getCards(5)]];
  const falseOptions = falseBoards.map(board => Hand.solve(board, 'standard', false).descr);

  // make sure the options are unique and include the first correct one
  const options = [...new Set([localState.value.correctOption, ...falseOptions])];
  return options.slice(0, 3);
}

// randomize options indexes
function randomizeOptions(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function evaluateOption(option) {
  if (option === localState.value.correctOption) {
    gameStore.setGamePoints(points.win, gameModes[gameStore.currentSession.mode].gain);
    gameStore.setGameAnswers();
    gameStore.setGameResult(results.correct);
  }
  else {
    gameStore.setGamePoints(points.loss, gameModes[gameStore.currentSession.mode].loss);
    gameStore.setGameResult(results.incorrect);
  }
}

// create new deck & board. Generate options and start life
function startGame() {
  const deck = new Deck();
  localState.value.board = [...deck.getCards(5)];
  localState.value.correctOption = Hand.solve(localState.value.board, 'standard', false).descr;
  const optionsRaw = generateOptions();
  localState.value.options = randomizeOptions(optionsRaw);

  localState.value.intervalId = setInterval(() => {
    gameStore.setGamePoints(points.loss, 1);
  }, 1000);
}

function pauseGame() {
  clearInterval(localState.value.intervalId);
  localState.value.intervalId = null;
}

onMounted(() => {
  startGame();
});

onBeforeUnmount(() => {
  pauseGame();
});
</script>

<style scoped lang="scss">
.options-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.option-item {
  background-color: #fff;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  padding: 15px 20px;
  margin: 10px 0;
  width: 80%;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e0f7fa;
    border-color: #00acc1;
    color: #007c91;
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 172, 193, 0.3);
  }

  &:active {
    background-color: #b2ebf2;
    border-color: #007c91;
    color: #004d40;
    transform: translateY(0);
    box-shadow: none;
  }
}
.flex-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
