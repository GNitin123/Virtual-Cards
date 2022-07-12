import { Button, Input, Popover, Checkbox, Select } from 'antd';
import { FilterOutlined, SearchOutlined, CloseOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import useFetchCard from '../../utils/fetchCard';
const { Option } = Select;

const Filter = ({ searchValue, filterData, cardHolderList, currentTab }) => {
  const [isSearch, setIsSearch] = useState(false);
  const [cardType, setCardType] = useState('');
  const [cardHolder, setCardHolder] = useState();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { getCardHolders } = useFetchCard();

  useEffect(() => {
    getCardHolders(currentTab);
  }, [currentTab]);

  const clearSearch = () => {
    setIsSearch(preSearch => !preSearch);
    searchValue('');
  };

  const handleChange = event => {
    searchValue && searchValue(event.target.value);
  };

  const onCardTypeChange = checkedValue => {
    setCardType(checkedValue.toString());
  };

  const applyFilter = () => {
    filterData && filterData({ cardType, cardHolder });
    setIsFilterOpen(false);
  };

  const onCardHolderChange = holderName => {
    setCardHolder(holderName);
  };

  const handleFilterClear = () => {
    setCardType('');
    setCardHolder();
  };

  const text = <div className="filter__menu-title">Filters</div>;

  const cardHolderOptions =
    cardHolderList.length &&
    cardHolderList.map((card, index) => (
      <Option key={index} value={card.card_holder.toLowerCase()}>
        {card.card_holder}
      </Option>
    ));

  const content = (
    <div className="filter__menu-content">
      <div>
        <label className="filter__menu-content-label">Type</label>
        <div className="filter__menu-content-section">
          <Checkbox.Group onChange={onCardTypeChange} style={{ width: '100%' }} value={cardType}>
            <Checkbox
              value={'subscription'}
              className="filter__menu-content-checkbox filter__menu-content-subscription"
            >
              Subscription
            </Checkbox>
            <Checkbox value={'burner'} className="filter__menu-content-checkbox">
              Burner
            </Checkbox>
          </Checkbox.Group>
        </div>
      </div>
      <div>
        <label className="filter__menu-content-label">CardHolder</label>
        <div className="filter__menu-content-section">
          <Select
            size="large"
            className="filter__menu-content-card-holder"
            placeholder="Select cardholder"
            onChange={onCardHolderChange}
            value={cardHolder}
          >
            {cardHolderOptions}
          </Select>
        </div>
        <div className="filter__menu-content-btn-box">
          <Button className="filter__menu-content-btn-box__apply-btn" onClick={applyFilter}>
            Apply
          </Button>
          <Button className="filter__menu-content-btn-box__clear-btn" onClick={handleFilterClear}>
            Clear
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="filter">
      <div className="filter__search">
        {!isSearch ? (
          <SearchOutlined
            className="filter__search-icon"
            onClick={() => setIsSearch(preSearch => !preSearch)}
          />
        ) : (
          <Input
            suffix={<CloseOutlined onClick={clearSearch} />}
            bordered={false}
            placeholder="Input Card Name"
            className="filter__search-input"
            onChange={handleChange}
            autoFocus={true}
          />
        )}
      </div>
      <Popover
        visible={isFilterOpen}
        placement="bottomRight"
        title={text}
        content={content}
        trigger="click"
      >
        <Button onClick={() => setIsFilterOpen(!isFilterOpen)} className="filter__button">
          <FilterOutlined /> Filter
        </Button>
      </Popover>
    </div>
  );
};

export default Filter;
