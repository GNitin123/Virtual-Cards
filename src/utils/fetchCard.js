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
  search: '',
  cardType: '',
  cardHolder: '',
};

let query = {};

const useFetchCard = () => {
  const { getCardDetail, getCardHolderDetail } = useAPI();
  const { setCardList, setMeta, setCardHolderList } = useContext(VirtualCardContext);

  const getCardQuery = (
    filterKey,
    {
      limit = statusDictionary.limit,
      offset = statusDictionary.offset,
      search = statusDictionary.search,
      cardType = statusDictionary.cardType,
      cardHolder = statusDictionary.cardHolder,
    },
  ) => {
    query = {
      ...query,
      ...(filterKey === 'your' && { ownerId: statusDictionary.your }),
      ...(filterKey === '' && statusDictionary.all),
      ...(filterKey === 'blocked' && { status: statusDictionary.blocked }),
      limit: limit,
      offset: offset,
      search,
      cardType,
      cardHolder,
    };
  };

  const fetchCardData = async (filterKey, pagination) => {
    setCardList([]);
    getCardQuery(filterKey, pagination);
    const response = await getCardDetail({ ...query });
    const list = response.card;
    setMeta(response.meta);
    setCardList(list);
    query = {};
  };

  const getCardHolders = async () => {
    const response = await getCardHolderDetail();
    setCardHolderList(response);
  };

  return {
    fetchCardData,
    getCardHolders,
  };
};

export default useFetchCard;
