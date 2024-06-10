import { defineStore } from 'pinia';
import { gameModes } from '../helpers/constants.js';

export const useGameStore = defineStore('game', {
  state: () => ({
    gameData: {
      result: null,
      points: gameModes.normal.points,
      session: {
        id: '',
        answers: 0,
        mode: null,
      },
    },
  }),
  getters: {
    game: state => state.gameData,
    result: state => state.gameData.result,
    points: state => state.gameData.points,
    answers: state => state.gameData.answers,
    gameInProgress: state => state.gameData.session.id && state.gameData.points > 0,
    gameEnded: state => state.gameData.points <= 0,
    currentSession: state => state.gameData.session,
  },
  actions: {
    setGameResult(type) {
      this.gameData.result = type;
    },
    startGameSession(gameMode) {
      this.gameData.points = gameModes[gameMode].points;
      this.gameData.session.mode = gameMode;
      const randomNum = Math.floor(Math.random() * 10000);
      const uniqueId = `id-${Date.now()}-${randomNum}`; // unique id based on current timestap + random nomber from 1 to 9999
      this.gameData.session.id = uniqueId;
      const sessionsRaw = localStorage.getItem('sessions');
      if (sessionsRaw) {
        const sessions = JSON.parse(sessionsRaw);
        sessions.push(this.game.session);
        localStorage.setItem('sessions', JSON.stringify(sessions));
      }
      else {
        localStorage.setItem('sessions', JSON.stringify([this.game.session]));
      }
    },
    setGameAnswers() {
      this.gameData.session.answers++;
    },
    setGamePerformance() {
      let sessions = JSON.parse(localStorage.getItem('sessions'));
      sessions = sessions.map((session) => {
        if (session.id === this.game.session.id) {
          session.answers = this.game.session.answers;
        }
        return session;
      });
      localStorage.setItem('sessions', JSON.stringify(sessions));
    },
    setGamePoints(type, amount) {
      if (type === 'win') {
        this.gameData.points = this.gameData.points + amount;
      }
      if (type === 'loss') {
        this.gameData.points = this.gameData.points - amount;
      }
    },
  },
});
