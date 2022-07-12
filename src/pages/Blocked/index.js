import { useContext, useEffect, useState } from 'react';
import Card from '../../components/Helper/Card';
import VirtualCardContext from '../../context/VirtualCardContext';
import InfiniteScroll from 'react-infinite-scroll-component';
import useFetchCard from '../../utils/fetchCard';

const BlockedVirtualCard = () => {
  const { cardList, meta, isFilter, setIsCardListLoading } = useContext(VirtualCardContext);
  const { fetchCardData } = useFetchCard();
  const [blockedList, setBlockedList] = useState([]);

  useEffect(() => {
    const newBlockedList = isFilter ? cardList : [...blockedList, ...cardList];
    setBlockedList(newBlockedList);
  }, [cardList]);

  const loadMore = () => {
    if (meta?.nextPage) {
      fetchCardData(null, { limit: 10, offset: meta?.nextPage });
      setIsCardListLoading(true);
    }
  };

  const card =
    blockedList?.length > 0
      ? blockedList?.map((card, index) => (
          <Card
            key={index}
            cardContent={card}
            spent={(card.spent.value / (card.spent.value + card.available_to_spend.value)) * 100}
            availableToSpend={
              (card.available_to_spend.value / (card.spent.value + card.available_to_spend.value)) *
              100
            }
          />
        ))
      : null;

  return (
    <>
      {card ? (
        <InfiniteScroll
          className="page-card-wrapper"
          next={loadMore}
          hasMore={!!meta.nextPage}
          dataLength={meta.total}
          loader={<h4>Loading...</h4>}
        >
          {card}
        </InfiniteScroll>
      ) : null}
    </>
  );
};

export default BlockedVirtualCard;
