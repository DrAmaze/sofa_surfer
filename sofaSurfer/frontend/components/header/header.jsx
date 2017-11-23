import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import SessionForm from '../session_form/session_form_container';

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
              <input className='join-button' type="submit" value="Join" onClick={this.handleSignup} />
            </li>
            <li className='login'>
              <input className='login-button' type='submit' value='Log In' onClick={this.handleLogIn}/>
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
        position        : 'fixed',
        top             : '100px',
        left            : '150px',
        right           : '150px',
        bottom          : '100px',
        border          : '1px solid #ccc',
        zIndex          : 11,
        background      : 'white',
        borderRadius    : '5px'
      }
    };
    return (

      <div className='header-container'>
        <header className='header'>
          { userInfo }
        </header>
        <Modal
          className='modal'
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={style}>
          <SessionForm />
        </Modal>
      </div>
    );
  }
}

export default Header;
