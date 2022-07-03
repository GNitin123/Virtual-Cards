import { createContext, useState } from 'react';

const VirtualCardContext = createContext();

export const VirtualCardProvider = ({ children }) => {
  const [cardList, setCardList] = useState([]);
  const [isCardListLoading, setIsCardListLoading] = useState(false);

  return (
    <VirtualCardContext.Provider
      value={{ cardList, setCardList, isCardListLoading, setIsCardListLoading }}
    >
      {children}
    </VirtualCardContext.Provider>
  );
};

export default VirtualCardContext;
