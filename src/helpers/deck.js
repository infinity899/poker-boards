export function Deck() {
  const suits = ['d', 's', 'c', 'h'];
  const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

  this.cards = [];
  this.shuffle = function() {
    let j, x, i;
    for (i = this.cards.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = x;
    }
  }

  for (let suit = 0; suit < 4; suit++) {
    for (let rank = 0; rank < 13; rank++) {
      this.cards.push(ranks[rank] + suits[suit]);
    }
  }

  this.getCards = function(number) {
    if (typeof number === 'undefined') number = 1;
    let returnCards = [];
    for (let i = 0; i < number; i++) {
      returnCards.push(this.cards.pop());
    }
    return returnCards;
  }

  this.shuffle();
}
