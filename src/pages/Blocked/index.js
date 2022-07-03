import { useContext } from 'react';
import Card from '../../components/Helper/Card';
import VirtualCardContext from '../../context/VirtualCardContext';

const BlockedVirtualCard = () => {
  const { cardList } = useContext(VirtualCardContext);

  const card = cardList.map((card, index) => <Card key={index} cardContent={card} />);

  return (
    <>
      <div className="page-card-wrapper">{card}</div>
    </>
  );
};

export default BlockedVirtualCard;
