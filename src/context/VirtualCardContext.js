import { createContext, useState } from 'react';

const VirtualCardContext = createContext();

export const VirtualCardProvider = ({ children }) => {
  const [cardList, setCardList] = useState([]);
  const [meta, setMeta] = useState({});
  const [isCardListLoading, setIsCardListLoading] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const [cardHolderList, setCardHolderList] = useState([]);

  return (
    <VirtualCardContext.Provider
      value={{
        cardList,
        setCardList,
        isCardListLoading,
        setIsCardListLoading,
        meta,
        setMeta,
        isFilter,
        setIsFilter,
        cardHolderList,
        setCardHolderList,
      }}
    >
      {children}
    </VirtualCardContext.Provider>
  );
};

export default VirtualCardContext;
