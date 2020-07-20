import React from 'react';
import { shallow } from 'enzyme';

import Food from '../../components/Food';

describe('Food Component', () => {
  const food = { strMealThumb: 'https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg', strMeal: 'Beef and Mustard Pie' };

  it('should render', () => {
    const component = shallow(
      <Food food={food} />,
    );
    const element = component.find('.food-page');
    expect(element.length).toBe(1);

    const img = component.find('.meal-img');
    expect(img.props().src).toEqual(food.strMealThumb);

    const p = component.find('.meal-name');
    expect(p.text()).toEqual(food.strMeal);
  });
});
