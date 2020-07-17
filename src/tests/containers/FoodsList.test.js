import React from 'react';
import { shallow } from 'enzyme';

import FoodsList from '../../containers/FoodsList';

const setup = ({ foods, fetchRecipies, filterFoodList }) => shallow(
  <FoodsList.WrappedComponent
    foods={foods}
    fetchRecipies={fetchRecipies}
    filterFoodList={filterFoodList}
  />,
);

describe('Food List Container', () => {
  let container;
  beforeEach(() => {
    container = setup({
      foods: {
        foods,
      },
    });
  });
});
