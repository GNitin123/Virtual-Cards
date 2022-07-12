import card from '../db/DBOperations/Card';

const useAPI = () => {
  const getCardDetail = query => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = card.get(query);
        setTimeout(() => {
          resolve(response);
        }, 500);
      } catch (error) {
        reject(error);
      }
    });
  };

  const getCardHolderDetail = tab => {
    return new Promise((resolve, reject) => {
      try {
        const response = card.getCardHolders(tab);
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
