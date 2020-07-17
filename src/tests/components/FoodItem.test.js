import React from 'react';
import { shallow, mount } from 'enzyme';
import Provider from 'react-redux';
import configureStore from 'redux-mock-store';

import FoodItem from '../../components/FootItem';

const mockStore = configureStore([]);

const store = mockStore({});

describe('FoodItem Component', () => {
  const food = {
    strMealThumb: 'https://www.themealdb.com/images/media/meals/1529446352.jpg', strMeal: 'Chicken Congee', strIngredient1: 'Chicken', strInstructions: `STEP 1 - MARINATING THE CHICKEN
  In a bowl, add chicken, salt, white pepper, ginger juice and then mix it together well.
  Set the chicken aside.
  STEP 2 - RINSE THE WHITE RICE
  Rinse the rice in a metal bowl or pot a couple times and then drain the water.
  STEP 2 - BOILING THE WHITE RICE
  Next add 8 cups of water and then set the stove on high heat until it is boiling. Once rice porridge starts to boil, set the stove on low heat and then stir it once every 8-10 minutes for around 20-25 minutes.
  After 25 minutes, this is optional but you can add a little bit more water to make rice porridge to make it less thick or to your preference.
  Next add the marinated chicken to the rice porridge and leave the stove on low heat for another 10 minutes.
  After an additional 10 minutes add the green onions, sliced ginger, 1 pinch of salt, 1 pinch of white pepper and stir for 10 seconds.
  Serve the rice porridge in a bowl
  Optional: add Coriander on top of the rice porridge.`,
  };

  it('should render', () => {
    const wrapper = mount(<Provider store={store}><FoodItem food={food} /></Provider>);
    console.log(wrapper.debug());

    // const component = shallow(
    //   <FoodItem food={food} />,
    // );
    const element = wrapper.find('.food-item');
    expect(element.length).toBe(1);

    // const img = component.find('.meal-img');
    // expect(img.props().src).toEqual(food.strMealThumb);

    // const p = component.find('.instruction');
    // expect(p.text()).toEqual(food.strInstructions);
  });
});
