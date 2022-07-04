import useAPI from '../core/api/api';
import { useContext } from 'react';
import VirtualCardContext from '../context/VirtualCardContext';

const myOwnerId = 1;

const statusDictionary = {
  your: myOwnerId,
  all: {},
  blocked: 'blocked',
  limit: 10,
  offset: 1,
};

let query = {};

const useFetchCard = () => {
  const { getCardDetail } = useAPI();
  const { setCardList, setMeta } = useContext(VirtualCardContext);

  const getCardQuery = (
    filterKey,
    { limit = statusDictionary.limit, offset = statusDictionary.offset },
  ) => {
    query = {
      ...query,
      ...(filterKey === 'your' && { ownerId: statusDictionary.your }),
      ...(filterKey === '' && statusDictionary.all),
      ...(filterKey === 'blocked' && { status: statusDictionary.blocked }),
      limit: limit,
      offset: offset,
    };
  };

  const fetchCardData = async (filterKey, pagination) => {
    setCardList([]);
    getCardQuery(filterKey, pagination);
    console.log('queryResponse', query);
    const response = await getCardDetail({ ...query });
    const list = response.card;
    setMeta(response.meta);
    setCardList(list);
    query = {};
  };
  return {
    fetchCardData,
  };
};

export default useFetchCard;
