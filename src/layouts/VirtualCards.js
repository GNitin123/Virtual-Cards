import { VideoCameraOutlined, PlusOutlined } from '@ant-design/icons';

const VirtualCards = () => {
  return (
    <div className="virtual-card-wrapper">
      <div className="virtual-card-wrapper__heading">
        <h1>Virtual Cards</h1>
        <span className="virtual-card-wrapper__heading__learn-more">
          <VideoCameraOutlined /> Learn more
        </span>
      </div>
      <div>
        <span className="virtual-card-wrapper__add-card">
          <PlusOutlined className="virtual-card-wrapper__plus-icon" /> Virtual card
        </span>
      </div>
    </div>
  );
};

export default VirtualCards;
