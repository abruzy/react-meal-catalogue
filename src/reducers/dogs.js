const INITIAL_STATE = { dog_clothes: [], singleDog: {} };

const dogs = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, dog_clothes: action.payload };
    case 'FETCH_DOG':
      return { ...state, singleDog: action.payload };
    case 'FETCH_BY_CATEGORY':
      return { ...state, dog_clothes: action.payload.data.meals };
    case 'RESET_DATA':
      return { ...state, dog_clothes: [] };
    default:
      return state;
  }
};

export default dogs;