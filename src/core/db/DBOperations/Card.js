import cardData from '../../db/virtualCards.json';

class Card {
  #find(query) {
    let newCardList = [...cardData.card];
    if ('ownerId' in query)
      newCardList = newCardList.filter(card => card.owner_id === query.ownerId);
    if ('status' in query) newCardList = newCardList.filter(card => card.status === query.status);
    return newCardList;
  }
  constructor() {
    this.validQueries = ['ownerId', 'status'];
  }
  get(query = {}) {
    const queryKeys = Object.keys(query);
    const isOperationValid = queryKeys.every(queryKey => this.validQueries.includes(queryKey));
    if (!isOperationValid) throw new Error('Invalid Query');
    return this.#find(query);
  }
}

const card = new Card();
export default card;
