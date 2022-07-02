import { VideoCameraOutlined, PlusOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import VirtualCardFilter from '../components/VirtualCard/Filter';
const { TabPane } = Tabs;

const VirtualCards = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [tabList] = useState([
    { key: 1, text: 'Your', value: 'your' },
    { key: 2, text: 'All', value: '' },
    { key: 3, text: 'Blocked', value: 'blocked' },
  ]);
  const [currentTab, setCurrentTab] = useState(pathname.slice(1));

  const handleTabClick = key => {
    setCurrentTab(key);
    navigate(`/${key}`);
  };

  const tabPane = tabList.map(tab => <TabPane tab={tab.text} key={tab.value} />);

  return (
    <div className="virtual-card-wrapper">
      <div className="virtual-card-wrapper__header">
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
      <Tabs
        size="large"
        tabBarStyle={{ color: 'grey' }}
        tabBarGutter={40}
        defaultActiveKey={currentTab}
        onTabClick={handleTabClick}
      >
        {tabPane}
      </Tabs>
      <VirtualCardFilter />
    </div>
  );
};

export default VirtualCards;
