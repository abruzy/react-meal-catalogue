import React from 'react';
import { shallow } from 'enzyme';
import Food from '../../components/Food';

describe('FoodItem Component', () => {
  it('should render without any errors', () => {
    const component = shallow(<Food />);
    const wrapper = component.find('.book-page');
    expect(wrapper.length).toBe(1);
  });
});
