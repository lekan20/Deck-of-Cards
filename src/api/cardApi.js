export default class CardApi {
  constructor() {
    this.baseUrl = "https://deckofcardsapi.com/api/deck";
  }

  shuffleCards(count = 1) {
    return fetch(`${this.baseUrl}/new/shuffle/?deck_count=${count}`);
  }

  drawCards(deckId, count = 1) {
    return fetch(`${this.baseUrl}/${deckId}/draw/?count=${count}`);
  }
}
