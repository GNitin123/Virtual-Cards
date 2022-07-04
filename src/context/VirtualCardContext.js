import { createContext, useState } from 'react';

const VirtualCardContext = createContext();

export const VirtualCardProvider = ({ children }) => {
  const [cardList, setCardList] = useState([]);
  const [meta, setMeta] = useState({});
  const [isCardListLoading, setIsCardListLoading] = useState(false);

  return (
    <VirtualCardContext.Provider
      value={{ cardList, setCardList, isCardListLoading, setIsCardListLoading, meta, setMeta }}
    >
      {children}
    </VirtualCardContext.Provider>
  );
};

export default VirtualCardContext;
