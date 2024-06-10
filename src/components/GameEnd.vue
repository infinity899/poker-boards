<template>
  <div class="leaderboard-container">
    <h1 class="leaderboard-title">
      Leaderboard
    </h1>
    <div class="leaderboard">
      <div v-for="(session, index) in sessions" :key="session.id" class="leaderboard-item">
        <span class="attempt">Attempt {{ index + 1 }} - </span>
        <span class="answers"> {{ session.answers }} answers</span>
      </div>
    </div>
    <button class="start-button" @click="startGame">
      Start again
    </button>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useGameStore } from '../stores/game.js';

const gameStore = useGameStore();

const sessions = ref([]);

function getSessionsFromStorage() {
  sessions.value = JSON.parse(localStorage.getItem('sessions'));
}

function startGame() {
  gameStore.startGameSession(gameStore.currentSession.mode);
  gameStore.setGameResult(null);
}

onMounted(() => getSessionsFromStorage());
</script>

<style scoped lang="scss">
.leaderboard-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  color: #333;
}

.leaderboard-title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #007bff;
}

.leaderboard {
  width: 100%;
  max-width: 600px;
}

.leaderboard-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin: 10px 0;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }
}

.attempt {
  font-size: 18px;
  font-weight: bold;
  color: #007bff;
}

.answers {
  font-size: 18px;
  color: #28a745;
}

.start-button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }
}
</style>
