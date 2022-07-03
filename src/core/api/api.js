import cardData from '../db/virtualCards.json';

const useAPI = () => {
  const getCardDetail = ({ status }) => {
    return new Promise((resolve, reject) => {
      try {
        const filteredData =
          cardData.length > 0 ? cardData.filter(card => card.status === status) : [];
        setTimeout(() => {
          resolve(filteredData);
        }, 500);
      } catch (error) {
        reject(error);
      }
    });
  };
  return { getCardDetail };
};

export default useAPI;
