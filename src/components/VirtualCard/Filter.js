import { Button, Input, Popover, Checkbox, Select } from 'antd';
import { FilterOutlined, SearchOutlined, CloseOutlined } from '@ant-design/icons';
import { useState } from 'react';
const { Option } = Select;

const Filter = ({ searchValue }) => {
  const [isSearch, setIsSearch] = useState(false);

  const clearSearch = () => {
    setIsSearch(preSearch => !preSearch);
    searchValue('');
  };

  const handleChange = event => {
    searchValue && searchValue(event.target.value);
  };

  const text = <div className="filter__menu-title">Filters</div>;

  const content = (
    <div className="filter__menu-content">
      <div>
        <label className="filter__menu-content-label">Type</label>
        <div className="filter__menu-content-section">
          <Checkbox className="filter__menu-content-checkbox filter__menu-content-subscription">
            Subscription
          </Checkbox>
          <Checkbox className="filter__menu-content-checkbox">Burner</Checkbox>
        </div>
      </div>
      <div>
        <label className="filter__menu-content-label">CardHolder</label>
        <div className="filter__menu-content-section">
          <Select
            size="large"
            className="filter__menu-content-card-holder"
            defaultValue="Select cardholder"
          >
            <Option value="jack">Jack</Option>
          </Select>
        </div>
        <div className="filter__menu-content-btn-box">
          <Button className="filter__menu-content-btn-box__apply-btn">Apply</Button>
          <Button className="filter__menu-content-btn-box__clear-btn">Clear</Button>
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
      <Popover placement="bottomRight" title={text} content={content} trigger="click">
        <Button className="filter__button">
          <FilterOutlined /> Filter
        </Button>
      </Popover>
    </div>
  );
};

export default Filter;
