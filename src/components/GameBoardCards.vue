<template>
  <div class="card-row_cards">
    <div v-for="(card, index) in board" :key="index" class="card-symbol">
      <div class="card-rank" :class="`card-rank-${card[1]}`">
        {{ card[0] }}
      </div>
      <GameCardSuite :suite="card[1]" />
    </div>
  </div>
</template>

<script setup>
import GameCardSuite from './GameCardSuite.vue';

defineProps({
  board: Array,
});
</script>

<style lang="scss">
.card-row_cards {
  display:  flex;
}

.card-symbol {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 150px;
  border: 1px solid #000;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  @media (max-width: 600px) {
    width: 65px;
    height: 85px;
  }
}

.card-rank {
  font-size: 24px;
  font-weight: bold;
  position: absolute;
  top: 10px;
  left: 10px;
  @media (max-width: 600px) {
    top: 5px;
  }
  &-s {
    color: #000;
  }
  &-d {
    color: blue;
  }
  &-h {
    color: red;
  }
  &-c {
    color: green;
  }
}

.card-symbol svg {
  width: 40px;
  height: 40px;
  margin-top: 20px;
}

.card-symbol .card-rank.bottom {
  position: absolute;
  bottom: 10px;
  right: 10px;
  transform: rotate(180deg);
}
</style>
