import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import LoginForm from '../session_form/login_container';
import SignupForm from '../session_form/signup_container';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };

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

  handleSignup() {
    this.setState({ modalOpen: true, formType: 'signup' });
  }

  handleLogIn() {
    this.setState({ modalOpen: true, formType: 'login' });
  }

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
              Host
            </li>
            <li>
              Bookings
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
              <input className='color-button' type="submit" value="Join" onClick={this.handleSignup} />
            </li>
            <li className='login'>
              <input className='clear-button' type='submit' value='Log In' onClick={this.handleLogIn}/>
            </li>
          </ul>
        </li>
      </ul>
    );

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
        top: '100px',
        border          : '1px solid #ccc',
        zIndex          : 11,
        background      : 'white',
        borderRadius    : '5px',
        maxWidth        : '500px',
        minWidth        : '450px',
        maxHeight       : '450px',
        minHeight       : '400px',
        marginLeft      : '20%',
        marginRight     : '20%',
      }
    };

    const session = this.state.formType === 'signup' ? (
      <SignupForm closeModal={this.closeModal}/>
      ) : (
        <LoginForm closeModal={this.closeModal}/>
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
