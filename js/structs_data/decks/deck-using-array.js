class DeckUsingArray {
  constructor() {
    this.deck = []
  }

  enqueue = data => this.deck.push(data)

  dequeue = () => this.deck.shift()

  toString = () => this.deck.toString()
}