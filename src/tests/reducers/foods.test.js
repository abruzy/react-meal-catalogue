import foods from '../../reducers/foods';

describe('foods reducer', () => {
  it('should return the initial state', () => {
    expect(foods(undefined, {})).toMatchSnapshot();
  });

  it('should handle FETCH RECIPIES', () => {
    expect(foods([], {
      type: 'FETCH RECIPIES',
    })).toMatchSnapshot();
  });

  it('should handle FETCH RECIPE', () => {
    expect(foods({}, {
      type: 'FETCH RECIPE',
    })).toMatchSnapshot();
  });

  it('should handle RESET DATA', () => {
    expect(foods([], {
      type: 'RESET_DATA',
    })).toMatchSnapshot();
  });
});
