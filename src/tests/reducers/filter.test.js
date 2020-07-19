import filter from '../../reducers/filter';

describe('filter reducer', () => {
  it('should return initial state', () => {
    expect(filter(undefined, 'All')).toMatchSnapshot();
  });

  it('should handle CHANGE FILTER', () => {
    expect(filter('All', {
      type: 'CHANGE FILTER',
    })).toMatchSnapshot();
  });
});
