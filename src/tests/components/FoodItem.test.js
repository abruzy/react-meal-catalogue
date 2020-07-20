import React from 'react';
import { shallow } from 'enzyme';
import { food } from '../helper/helper';
import FoodItem from '../../components/FoodItem';

const setup = ({
  food, location, fetchRecipe, clearData,
}) => shallow(
  <FoodItem.WrappedComponent
    food={food}
    location={location}
    fetchRecipe={fetchRecipe}
    clearData={clearData}
  />,
);

describe('Food Item Component', () => {
  let component;

  beforeEach(() => {
    component = setup({
      food,
      location: {
        pathname: `/food/${food.idMeal}`,
      },
      fetchRecipe: () => jest.fn(),
      clearData: () => jest.fn(),
    });
  });

  it('should render', () => {
    const element = component.find('.food-item');
    expect(element.length).toEqual(1);

    const img = component.find('.meal-img');
    expect(img.props().src).toEqual(food.strMealThumb);
  });
});
