import React from 'react';
import Modal from 'react-modal';
import { shallow, mount, render } from 'enzyme';
import Splash from '../components/splash/splash';

const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<SplashContainer>', () => {

  it('Should render page', () => {
    expect(shallow(<Splash />).exists(<div className='splash'></div>)).toBe(true);
  });

  it('Enables user to access session forms', () => {
    expect(shallow(<Splash />).exists(<button className='color-button'></button>)).toBe(true);
  });
});
