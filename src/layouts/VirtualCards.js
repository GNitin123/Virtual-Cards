import { VideoCameraOutlined, PlusOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import _ from 'lodash';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import VirtualCardFilter from '../components/VirtualCard/Filter';
import useFetchCard from '../utils/fetchCard';
import VirtualCardContext from '../context/VirtualCardContext';

const { TabPane } = Tabs;

const VirtualCards = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { fetchCardData } = useFetchCard();
  const { setIsFilter, cardHolderList } = useContext(VirtualCardContext);
  const [tabList] = useState([
    { key: 1, text: 'Your', value: 'your' },
    { key: 2, text: 'All', value: '' },
    { key: 3, text: 'Blocked', value: 'blocked' },
  ]);
  const [currentTab, setCurrentTab] = useState(pathname.slice(1));

  useEffect(() => {
    fetchCardData(currentTab, { limit: 10, offset: 1 });
  }, []);

  const handleTabChange = key => {
    setCurrentTab(key);
    navigate(`/${key}`);
    fetchCardData(key, { limit: 10, offset: 1 });
  };

  const debounceSearch = _.debounce(search => {
    if (!search) setIsFilter(false);
    else setIsFilter(true);
    fetchCardData(currentTab, { limit: 10, offset: 1, search });
  }, 500);

  const searchValue = search => {
    debounceSearch(search);
  };

  const filterData = ({ cardType }) => {
    console.log('cardType', cardType);
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
      <VirtualCardFilter
        searchValue={searchValue}
        filterData={filterData}
        cardHolderList={cardHolderList}
      />
    </div>
  );
};

export default VirtualCards;
