<template>
  <div class="game-points-container">
    <div class="game-points">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF0000" class="health-icon">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      <span class="points">{{ gameStore.points }}</span>
    </div>
  </div>
</template>

<script setup>
import { useGameStore } from '../stores/game.js';

const gameStore = useGameStore();
</script>

<style lang="scss">
.game-points-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 10px;
  width: 120px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.game-points {
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: #333;

  .health-icon {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }

  .points {
    font-size: 24px;
    color: #ff0000;
  }
}
</style>
