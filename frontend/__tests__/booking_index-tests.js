import React from 'react';
import Modal from 'react-modal';
import BookingContainer from '../components/booking/booking_container';
import Booking from '../components/booking/booking_index';
import { shallow } from 'enzyme';

const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<BookingContainer>', () => {
  it('renders <ReactModal>', () => {
    const wrapper = shallow(<Booking fetchBookings={ () => {} } />);
    expect(wrapper.find(Modal).length).toEqual(1);
  });

  it('opens modal when button is clicked', () => {
    const wrapper = shallow(<Booking fetchBookings={ () => {} }/>);
    wrapper.find('button').simulate('click');
    expect(wrapper.find(Modal).prop('isOpen')).toEqual(true);
  });

});