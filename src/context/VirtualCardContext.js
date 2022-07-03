import { createContext, useState } from 'react';

const VirtualCardContext = createContext();

export const VirtualCardProvider = ({ children }) => {
  const [cardList, setCardList] = useState([]);

  return (
    <VirtualCardContext.Provider value={{ cardList, setCardList }}>
      {children}
    </VirtualCardContext.Provider>
  );
};
