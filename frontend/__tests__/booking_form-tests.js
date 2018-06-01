import React from 'react';
import BookingForm from '../components/booking/booking_form';
import { shallow, mount, render } from 'enzyme';

const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<BookingForm>', () => {
  it('renders the form', () => {
    // const wrapper = render(<BookingForm fetchSpots={ () => {} } fetchUsers={ () => {} } clearBookingErrors={ () => {} } createBooking={ () => {} } deleteBooking={ () => {} } />);
    // expect(wrapper.find('form').length).toEqual(1);
  });
});
