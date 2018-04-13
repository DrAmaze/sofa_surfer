import React from 'react';
import Modal from 'react-modal';
import { shallow, mount, render } from 'enzyme';
import Splash from '../components/splash/splash';

const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Splash Component', () => {

  it('Should render', () => {
    expect(shallow(<Splash />).exists(<div className='splash'></div>)).toBe(true);
  });

  it('Enables user to access session forms', () => {
    expect(shallow(<Splash />).exists(<input className='color-button'></input>)).toBe(true);
  });

  it('Mounts the React Modal', () => {
    const wrapper = shallow(<Splash />);
    wrapper.find('input').simulate('click');
    expect(wrapper.find(Modal).prop('isOpen')).toEqual(true);
  });
});
