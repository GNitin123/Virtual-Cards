// import FireIcon from 'mdi-react/FireIcon';
import AutoRenewIcon from 'mdi-react/AutorenewIcon';
import { Tag, Skeleton } from 'antd';
import { useState } from 'react';

const Card = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="card">
      <div className="flex mb">
        {!isLoading ? (
          <div>
            <div className="card__name">MixMax</div>
            <div className="card__card-holder flex">
              Vishal <div className="card__dot"></div>
              <span>Software Subscription</span>
            </div>
          </div>
        ) : (
          <Skeleton active paragraph={{ rows: 1 }} />
        )}
        <div className="card__icon-background">
          {/* <FireIcon className="card__icon" size={40} /> */}
          {!isLoading ? (
            <AutoRenewIcon className="card__icon" size={40} />
          ) : (
            <Skeleton.Avatar className="card__icon" size="large" active />
          )}
        </div>
      </div>
      <div className="flex mb">
        {!isLoading ? (
          <>
            <Tag className="card__type">Burner</Tag>
            <p className="card__type-limit">Expires: 9 Feb</p>
          </>
        ) : (
          <>
            <Skeleton.Input active />
            <Skeleton.Input active />
          </>
        )}
      </div>
      <div className="flex mb">
        {!isLoading ? (
          <>
            <span className="card__spent-indicator" style={{ width: '50%' }}></span>
            <span className="card__available-indicator" style={{ width: '50%' }}></span>
          </>
        ) : (
          <Skeleton.Input block active style={{ height: '16px' }} />
        )}
      </div>
      <div className="card__spent flex">
        {!isLoading ? (
          <>
            <p className="flex">
              <span className="card__spent-point"></span> Spent
            </p>
            <p>148 SDG</p>
          </>
        ) : (
          <Skeleton.Input block active style={{ height: '16px' }} />
        )}
      </div>
      <div className="card__spend flex">
        {!isLoading ? (
          <>
            <p className="flex">
              <span className="card__spend-point"></span> Available to spend
            </p>
            <p className="card__spend-amount">30 SDG</p>
          </>
        ) : (
          <Skeleton.Input block active style={{ height: '16px' }} />
        )}
      </div>
    </div>
  );
};

export default Card;
