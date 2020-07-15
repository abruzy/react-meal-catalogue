const INITIAL_STATE = { foods_recipies: [], food_item: {} };

const foods = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH RECIPIES':
      return { ...state, foods_recipies: action.payload };
    case 'FETCH RECIPE':
      return { ...state, food_item: action.payload };
    case 'FILTER BY CATEGORY':
      return { ...state, foods_recipies: action.payload.data.meals };
    case 'RESET_DATA':
      return { ...state, foods_recipies: [] };
    default:
      return state;
  }
};

export default foods;
