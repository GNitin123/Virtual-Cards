import { useContext } from 'react';
import Card from '../../components/Helper/Card';
import VirtualCardContext from '../../context/VirtualCardContext';

const AllVirtualCard = () => {
  const { cardList } = useContext(VirtualCardContext);

  const card = cardList.map((card, index) => (
    <Card
      key={index}
      cardContent={card}
      spent={(card.spent.value / (card.spent.value + card.available_to_spend.value)) * 100}
      availableToSpend={
        (card.available_to_spend.value / (card.spent.value + card.available_to_spend.value)) * 100
      }
    />
  ));

  return (
    <>
      <div className="page-card-wrapper">{card}</div>
    </>
  );
};

export default AllVirtualCard;
