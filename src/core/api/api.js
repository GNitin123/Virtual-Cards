import card from '../db/DBOperations/Card';
import VirtualCardContext from '../../context/VirtualCardContext';
import { useContext } from 'react';

const useAPI = () => {
  const { setIsCardListLoading } = useContext(VirtualCardContext);

  const getCardDetail = query => {
    return new Promise(async (resolve, reject) => {
      try {
        setIsCardListLoading(true);
        const response = card.get(query);
        setTimeout(() => {
          resolve(response);
          setIsCardListLoading(false);
        }, 500);
      } catch (error) {
        reject(error);
      }
    });
  };

  const getCardHolderDetail = () => {
    return new Promise((resolve, reject) => {
      try {
        const response = card.getCardHolders();
        setTimeout(() => {
          resolve(response);
        }, 500);
      } catch (error) {
        reject(error);
      }
    });
  };
  return { getCardDetail, getCardHolderDetail };
};

export default useAPI;
