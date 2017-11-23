import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <nav className='login-head'>
            <h4>Log in to SofaSurfer</h4>
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
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder={'Password'}
              />
            </label>
            <br/>
            <input className='color-button' type="submit" value="Log In" />
            <br/>
            <span className='login-alternative'>
              Don't have an account?
            </span>
            <br/>
            <input className='clear-button' type="submit" value="Join" />
          </div>
        </form>
      </div>
    );
  }
}
