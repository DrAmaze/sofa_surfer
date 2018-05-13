import React from 'react';
import Modal from 'react-modal';
import Location from '../components/spot/spot_index';
import SpotIndexItem from '../components/spot/spot_index_item';
import { shallow, mount, render } from 'enzyme';

const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<LocationContainer>', () => {
  it('renders 10 locations', () => {
    const wrapper = shallow(<Location fetchSpots={ () => {} } />);
    expect(wrapper.find(<SpotIndexItem />).length).toEqual(10);
  });



});
