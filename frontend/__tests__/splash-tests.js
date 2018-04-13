import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Splash from './components/splash/splash.jsx';

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
});
