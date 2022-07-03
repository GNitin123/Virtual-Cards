// import FireIcon from 'mdi-react/FireIcon';
import AutoRenewIcon from 'mdi-react/AutorenewIcon';
import { Tag } from 'antd';

const Card = () => {
  return (
    <div className="card">
      <div className="flex mb">
        <div>
          <div className="card__name">MixMax</div>
          <div className="card__card-holder flex">
            Vishal <div className="card__dot"></div>
            <span>Software Subscription</span>
          </div>
        </div>
        <div className="card__icon-background">
          {/* <FireIcon className="card__icon" size={40} /> */}
          <AutoRenewIcon className="card__icon" size={40} />
        </div>
      </div>
      <div className="flex mb">
        <Tag className="card__type">Burner</Tag>
        <p className="card__type-limit">Expires: 9 Feb</p>
      </div>
      <div className="flex mb">
        <span className="card__spent-indicator" style={{ width: '50%' }}></span>
        <span className="card__available-indicator" style={{ width: '50%' }}></span>
      </div>
      <div className="card__spent flex">
        <p className="flex">
          <span className="card__spent-point"></span> Spent
        </p>
        <p>148 SDG</p>
      </div>
      <div className="card__spend flex">
        <p className="flex">
          <span className="card__spend-point"></span> Available to spend
        </p>
        <p className="card__spend-amount">30 SDG</p>
      </div>
    </div>
  );
};

export default Card;
