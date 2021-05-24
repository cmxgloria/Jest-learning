import React from 'react';
import { shallow } from 'enzyme';
import Header from '../filepath';
import TodoLists from '../../components/TodoLists';

test('should test Header component', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});

test('should test TodoLists component with default state of empty array', () => {
  const wrapper = shallow(<TodoLists todos={[]} />);
  expect(wrapper).toMatchSnapshot();
});
