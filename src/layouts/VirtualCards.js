import { VideoCameraOutlined, PlusOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import { useState } from 'react';
const { TabPane } = Tabs;

const VirtualCards = () => {
  const [tabList] = useState([
    { key: 1, text: 'Your', value: 'your' },
    { key: 2, text: 'All', value: 'all' },
    { key: 3, text: 'Blocked', value: 'blocked' },
  ]);

  const tabPane = tabList.map(tab => (
    <TabPane tab={tab.text} key={tab.key}>
      {tab.value}
    </TabPane>
  ));

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
      <Tabs size="large" tabBarStyle={{ color: 'grey' }} tabBarGutter={40} defaultActiveKey="1">
        {tabPane}
      </Tabs>
    </div>
  );
};

export default VirtualCards;
