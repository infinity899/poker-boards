<template>
  <GameStart v-if="gameInStartScreen" />
  <GameResult v-if="gameInResults" />
  <MyGame v-else-if="gameInProgress" />
  <GameEnd v-if="gameInLeaderboard" />
</template>

<script setup>
import { computed, watch } from 'vue';
import MyGame from './components/MyGame.vue';
import { useGameStore } from './stores/game';
import GameStart from './components/GameStart.vue';
import GameEnd from './components/GameEnd.vue';
import GameResult from './components/GameResult.vue';

const gameStore = useGameStore();

watch(() => gameStore.gameEnded, () => {
  gameStore.setGamePerformance();
});

const gameInProgress = computed(() => gameStore.gameInProgress);
const gameInLeaderboard = computed(() => gameStore.gameEnded);
const gameInResults = computed(() => gameStore.result && !gameStore.gameEnded);
const gameInStartScreen = computed(() => !gameStore.gameInProgress && !gameStore.gameEnded);
</script>

<style scoped>

</style>
