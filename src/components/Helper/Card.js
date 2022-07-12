import FireIcon from 'mdi-react/FireIcon';
import AutoRenewIcon from 'mdi-react/AutorenewIcon';
import { Tag, Skeleton } from 'antd';
import { useContext, useEffect } from 'react';
import VirtualCardContext from '../../context/VirtualCardContext';

const Card = ({ cardContent, spent, availableToSpend }) => {
  const { isCardListLoading, setIsCardListLoading } = useContext(VirtualCardContext);

  useEffect(() => {
    setIsCardListLoading(true);
    const timeOutId = setTimeout(() => {
      setIsCardListLoading(false);
    }, 400);
    return () => {
      clearInterval(timeOutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="card">
      <div className="flex mb">
        {!isCardListLoading ? (
          <div>
            <div className="card__name">{cardContent.name}</div>
            <div className="card__card-holder flex">
              {cardContent.card_holder} <div className="card__dot"></div>
              <span>{cardContent.budget_name}</span>
            </div>
          </div>
        ) : (
          <Skeleton active paragraph={{ rows: 1 }} />
        )}
        <div className="card__icon-background">
          {!isCardListLoading ? (
            cardContent.card_type === 'burner' ? (
              <FireIcon className="card__icon" size={40} />
            ) : (
              <AutoRenewIcon className="card__icon" size={40} />
            )
          ) : (
            <Skeleton.Avatar className="card__icon" size="large" active />
          )}
        </div>
      </div>
      <div className="flex mb">
        {!isCardListLoading ? (
          <>
            <Tag className="card__type">{cardContent.card_type}</Tag>
            <p className="card__type-limit">
              {cardContent.card_type === 'burner'
                ? `Expires: ${cardContent.expiry}`
                : `${cardContent.expiry.slice(1)} Limit: ${cardContent.limit} SGD`}
            </p>
          </>
        ) : (
          <>
            <Skeleton.Input active />
            <Skeleton.Input active />
          </>
        )}
      </div>
      <div className="flex mb">
        {!isCardListLoading ? (
          <>
            <span className="card__spent-indicator" style={{ width: `${spent}%` }}></span>
            <span
              className="card__available-indicator"
              style={{ width: `${availableToSpend}%` }}
            ></span>
          </>
        ) : (
          <Skeleton.Input block active style={{ height: '16px' }} />
        )}
      </div>
      <div className="card__spent flex">
        {!isCardListLoading ? (
          <>
            <p className="flex">
              <span className="card__spent-point"></span> Spent
            </p>
            <p>
              {cardContent.spent.value} {cardContent.spent.currency}
            </p>
          </>
        ) : (
          <Skeleton.Input block active style={{ height: '16px' }} />
        )}
      </div>
      <div className="card__spend flex">
        {!isCardListLoading ? (
          <>
            <p className="flex">
              <span className="card__spend-point"></span> Available to spend
            </p>
            <p className="card__spend-amount">
              {cardContent.available_to_spend.value} {cardContent.available_to_spend.currency}
            </p>
          </>
        ) : (
          <Skeleton.Input block active style={{ height: '16px' }} />
        )}
      </div>
    </div>
  );
};

export default Card;
