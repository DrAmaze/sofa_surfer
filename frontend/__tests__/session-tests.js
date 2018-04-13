import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Login from '../components/session_form/login';
import Signup from '../components/session_form/signup';

const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Login Component', () => {

  it('Should render without errors', () => {

  });
});
