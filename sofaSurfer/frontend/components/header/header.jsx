import React from 'react';
import { Link } from 'react-router-dom';
import merge from 'lodash/merge';

import Modal from 'react-modal';
import LoginForm from '../session_form/login_container';
import SignupForm from '../session_form/signup_container';
import Search from '../search/search_container';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };

    this.toggleHosting = this.toggleHosting.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  handleSignup(e) {
    e.preventDefault();
    this.setState({ modalOpen: true, formType: 'signup' });
  }

  handleLogIn(e) {
    e.preventDefault();
    this.setState({ modalOpen: true, formType: 'login' });
  }

  toggleHosting(e) {
    e.preventDefault();
    merge({}, this.props.currentUser, {
      hosting: !this.props.currentUser.hosting
    });
  }

  render () {
    const style = {
      overlay : {
        position        : 'fixed',
        top             : 0,
        left            : 0,
        right           : 0,
        bottom          : 0,
        backgroundColor : 'rgba(25, 25, 25, 0.90)',
        zIndex          : 10
      },
      content : {
        position        : 'relative',
        top             : '100px',
        border          : '1px solid #ccc',
        zIndex          : 11,
        background      : 'white',
        borderRadius    : '5px',
        maxWidth        : '33%',
        minWidth        : '450px',
        maxHeight       : '500px',
        minHeight       : '450px',
        marginLeft      : 'auto',
        marginRight     : 'auto',
      }
    };

    const userInfo = this.props.currentUser ? (
      <ul className='navbar-headers'>
        <li className='logo'>
          <span onClick={() => this.props.history.push('/dashboard')}>
            SofaSurfer
          </span>
        </li>
        <li>
          <Search />
        </li>
        <li className='navbar-logged-in'>
          <ul className='navbar-right'>
            <li>
              <span onClick={() => this.toggleHosting}>
                Hosting
              </span>
            </li>
            <li>
              <span onClick={() => this.props.history.push('/bookings')}>
                Bookings
              </span>
            </li>
            <li>
              <span onClick={this.props.logout}>Log Out</span>
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
              <input
                className='color-button'
                type="submit"
                value=" Join "
                onClick={this.handleSignup} />
            </li>
            <li className='login'>
              <input
                className='clear-button'
                type='submit'
                value='Log In'
                onClick={this.handleLogIn}/>
            </li>
          </ul>
        </li>
      </ul>
    );


    const session = this.state.formType === 'signup' ? (
      <SignupForm
        closeModal={this.closeModal}
        handleLogIn={this.handleLogIn}/>

      ) : (
        <LoginForm
          closeModal={this.closeModal}
          handleSignup={this.handleSignup}/>
      );

    return (
      <div className='header-container'>
        <header className='header'>
          { userInfo }
        </header>
        <Modal
          className='modal'
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          style={style}>
          {session}
        </Modal>
      </div>
    );
  }
}

export default Header;
