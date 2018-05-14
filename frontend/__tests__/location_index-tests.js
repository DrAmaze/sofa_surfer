import React from 'react';
import Modal from 'react-modal';
import Location from '../components/spot/spot_index';
import SpotIndexItem from '../components/spot/spot_index_item';
import { shallow, mount, render } from 'enzyme';

const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<LocationContainer>', () => {
  it('renders an unordered list of locations', () => {
    const wrapper = shallow(<Location fetchSpots={ () => {} } />);

    expect(wrapper.find('ul').length).toEqual(1);
  });

  it('renders an unordered list of locations', () => {
    // const wrapper = mount(<Location fetchSpots={ () => {} } />);
    //
    // expect(wrapper.find('ul')).toContain('li');
  });

  describe('<LocationListItem>', () => {
    it('renders the item', () => {
      // const wrapper = shallow(<SpotIndexItem key={0} id={0} />);
      // expect(wrapper.find('li')).toHaveLength(1);
    });
  });


});
