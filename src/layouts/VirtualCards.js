import { VideoCameraOutlined, PlusOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import { useEffect, useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import VirtualCardFilter from '../components/VirtualCard/Filter';
import useAPI from '../core/api/api';
import VirtualCardContext from '../context/VirtualCardContext';
const { TabPane } = Tabs;

const myOwnerId = 1;

const statusDictionary = {
  your: myOwnerId,
  all: {},
  blocked: 'blocked',
};

const VirtualCards = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { getCardDetail } = useAPI();
  const { setCardList } = useContext(VirtualCardContext);
  const [tabList] = useState([
    { key: 1, text: 'Your', value: 'your' },
    { key: 2, text: 'All', value: '' },
    { key: 3, text: 'Blocked', value: 'blocked' },
  ]);
  const [currentTab, setCurrentTab] = useState(pathname.slice(1));

  useEffect(() => {
    fetchCardData(currentTab);
  }, []);

  const getCardQuery = filterKey => {
    return {
      ...(filterKey === 'your' && { ownerId: statusDictionary.your }),
      ...(filterKey === '' && statusDictionary.all),
      ...(filterKey === 'blocked' && { status: statusDictionary.blocked }),
    };
  };

  const fetchCardData = async filterKey => {
    const query = getCardQuery(filterKey);
    const response = await getCardDetail({ ...query });
    setCardList(response);
  };

  const handleTabChange = key => {
    setCurrentTab(key);
    navigate(`/${key}`);
    fetchCardData(key);
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
        onChange={handleTabChange}
      >
        {tabPane}
      </Tabs>
      <VirtualCardFilter />
    </div>
  );
};

export default VirtualCards;
