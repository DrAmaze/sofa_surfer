import React from 'react';
import Modal from 'react-modal';
import { shallow } from 'enzyme';
import Header from '../components/header/header';

const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<HeaderContainer>', () => {
  it('renders Join and Log In buttons', () => {
    const wrapper = shallow(<Header clearSearch={ () => {} }/>);
    expect(wrapper.find('button').length).toEqual(2);
  });

  it('opens modal when button is clicked', () => {
    const wrapper = shallow(<Header clearSearch={ () => {} }/>);
    wrapper.find('.color-button').simulate('click');
    expect(wrapper.prop('modalOpen')).toEqual(true);
  });
});
