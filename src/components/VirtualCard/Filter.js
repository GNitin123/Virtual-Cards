import { Button, Input } from 'antd';
import { FilterOutlined, SearchOutlined, CloseOutlined } from '@ant-design/icons';
import { useState } from 'react';

const Filter = () => {
  const [isSearch, setIsSearch] = useState(false);

  const clearSearch = () => setIsSearch(preSearch => !preSearch);

  return (
    <div className="filter">
      <div className="filter__search">
        {!isSearch ? (
          <SearchOutlined className="filter__search-icon" onClick={clearSearch} />
        ) : (
          <Input
            suffix={<CloseOutlined onClick={clearSearch} />}
            bordered={false}
            placeholder="Input Card Name"
            className="filter__search-input"
          />
        )}
      </div>
      <Button className="filter__button">
        <FilterOutlined /> Filter
      </Button>
    </div>
  );
};

export default Filter;
