import cardData from '../../db/virtualCards.json';

class Card {
  static #validQueries = ['ownerId', 'status', 'limit', 'offset', 'search'];
  static #offset = 1;
  static #limit = 10;

  static #find(query) {
    console.log(query.search, 'search');
    let newCardList = [...cardData.card];
    if ('ownerId' in query)
      newCardList = newCardList.filter(card => card.owner_id === query.ownerId);
    if ('status' in query) newCardList = newCardList.filter(card => card.status === query.status);
    if ('search' in query)
      newCardList = newCardList.filter(card =>
        card.name.toLowerCase().includes(query.search.toLowerCase()),
      );
    return Card.#getPaginatedData(newCardList, query);
  }
  static #getPaginatedData(cardList, query) {
    let { offset = Card.#offset, limit = Card.#limit } = query;
    const paginationList = cardList.slice((offset - 1) * limit, limit + (offset - 1) * limit);
    return {
      card: paginationList,
      meta: {
        page: offset,
        perPage: limit,
        nextPage: limit * offset >= cardList.length ? null : ++offset,
        total: cardList.length,
      },
    };
  }

  get(query = {}) {
    const queryKeys = Object.keys(query);
    const isOperationValid = queryKeys.every(queryKey => Card.#validQueries.includes(queryKey));
    if (!isOperationValid) throw new Error('Invalid Query');
    return Card.#find(query);
  }
}

const card = new Card();
export default card;
