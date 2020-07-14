const INITIAL_STATE = { dog_clothes: [] };

const dogs = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      console.log(action.payload);
      return { ...state, dog_clothes: action.payload.data.meals };
    case 'FETCH_DOG':
      return { ...state, dog_clothes: action.payload.data.meals };
    case 'FETCH_BY_CATEGORY':
      console.log(action.payload);
      return { ...state, dog_clothes: action.payload.data.meals };
    case 'RESET_DATA':
      console.log(action.payload);
      return { ...state, dog_clothes: [] };
    default:
      return state;
  }
};

export default dogs;
