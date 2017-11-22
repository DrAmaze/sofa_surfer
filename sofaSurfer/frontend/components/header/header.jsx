import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  render () {
    const userInfo = this.props.currentUser ? (
      <ul className='navbar-headers'>
        <li className='logo'>
          <span onClick={() => this.props.history.push('/')}>
            SofaSurfer
          </span>
        </li>
        <li>
          <ul className='navbar-right'>
            <li>
              How it works
            </li>
            <li>
              Safety
            </li>
            <li className='join'>
              <input className='join-button' type="submit" value="Join" />
            </li>
            <li className='login'>
              <Link to={'/login'}>
                Log In
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    ) : (
      <ul className='navbar-headers'>
        <li className='logo'
          onClick={() => this.props.history.push('/')}>
          SofaSurfer
        </li>
        <li>
          <ul className='navbar-right'>
            <li>
              How it works
            </li>
            <li>
              Safety
            </li>
            <li className='join'>
              <input className='join-button' type="submit" value="Join" />
            </li>
            <li className='login'>
              <input className='login-button' type='submit' value='Log In' />
            </li>
          </ul>
        </li>
      </ul>
    );

    return (
      <div className='header-container'>
        <header className='header'>
          { userInfo }
        </header>
      </div>
    );
  }
}

export default Header;
