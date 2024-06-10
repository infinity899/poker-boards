<template>
  <div class="start-screen">
    <h1 class="game-title">
      What is the best hand game
    </h1>
    <p>
      Test your texas holdem reactions and pick the best hand from the board while you still have life points
    </p>
    <button class="start-button" @click="startGame(gameModes.easy.key)">
      Play - easy mode
    </button>
    <button class="start-button" @click="startGame(gameModes.normal.key)">
      Play - normal mode
    </button>
    <button class="start-button" @click="startGame(gameModes.hard.key)">
      Play - hard mode
    </button>
  </div>
</template>

<script setup>
import { useGameStore } from '../stores/game.js';
import { gameModes } from '../helpers/constants.js';

const gameStore = useGameStore();

function startGame(mode) {
  gameStore.startGameSession(mode);
}
</script>

<style scoped lang="scss">
.start-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  color: #fff;
  text-align: center;
}

.game-title {
  font-size: 48px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.start-button {
  padding: 15px 30px;
  font-size: 16px;
  font-weight: bold;
  min-width: 280px;
  margin-bottom: 12px;
  color: #fff;
  background-color: #ff4081;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #e73370;
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }

  &:active {
    background-color: #d0265c;
    transform: translateY(0);
    box-shadow: none;
  }
}
</style>
