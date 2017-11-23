import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

class SessionForm extends React.Component {

  render () {

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <nav className='login-head'>
            <h4>Join SofaSurfer for free</h4>
            <span
              onClick={this.props.closeModal}
              className="login-form-close">
              x
            </span>
            {this.renderErrors()}
          </nav>
          <div className="login-form">
            <br/>
            <label>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                placeholder={'Username'}
              />
            </label>
            <br/>
            <label>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                placeholder={'Email'}
              />
            </label>
            <br/>
            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder={'Password'}
              />
            </label>
            <br/>
            <input className='color-button' type="submit" value="Join with Email" />
            <br/>
            <span className='login-alternative'>
              Already a member?
            </span>
            <br />
            <input className='clear-button' type="submit" value="Log in" />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
