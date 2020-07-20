import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { FETCH_RECIPE, CLEAR_DATA } from '../../actions/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it('dispatches the correct action and payload', () => {
    store.dispatch(FETCH_RECIPE());
    expect(store.getActions()).toMatchSnapshot();
  });

  it('dispatches the correct action and payload', () => {
    store.dispatch(CLEAR_DATA());
    expect(store.getActions()).toMatchSnapshot();
  });
});
