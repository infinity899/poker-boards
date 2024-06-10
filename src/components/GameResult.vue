<template>
  <div class="result-page">
    <div class="result-message">
      Your answer was: <span class="result">{{ gameStore.result }}</span>
    </div>
    <div class="points-message">
      <div v-if="gameStore.result === results.correct">
        You win
        <span class="points">{{ gameModes[gameStore.currentSession.mode].gain }}</span>
      </div>
      <div v-if="gameStore.result === results.incorrect">
        You lose
        <span class="points">{{ gameModes[gameStore.currentSession.mode].loss }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useGameStore } from '../stores/game';
import { gameModes, results } from '../helpers/constants.js';

const gameStore = useGameStore();

function restartRound() {
  gameStore.setGameResult(null);
}
onMounted(() => {
  setTimeout(restartRound, 1000);
});
</script>

<style scoped lang="scss">
.result-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  text-align: center;
  color: #333;
}

.result-message {
  font-size: 20px;
  margin-bottom: 15px;

  .result {
    font-weight: bold;
    color: #007bff; // Blue for correct
    &.incorrect {
      color: #ff0000; // Red for incorrect
    }
  }
}

.points-message {
  font-size: 18px;
  color: #28a745; // Green for points
  .points {
    font-weight: bold;
  }
}
</style>
