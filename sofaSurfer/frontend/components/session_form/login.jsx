import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoSignin = this.demoSignin.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({ user }).then(() => this.props.closeModal());

  }

  renderErrors () {
    if (this.props.errors) {
      return (
        <ul>
          {this.props.errors.map((err, i) => (
            <li key={`error-${i}`}>
              {err}
            </li>
          ))}
        </ul>
      );
    }
  }

  demoSignin(e) {
    e.preventDefault();
    this.state = {
      username: 'sample',
      email: 'sample@user.com',
      password: 'password'
    };
    const user = this.state;
    this.props.processForm({ user }).then(() => this.props.closeModal());
  }

  render () {
    return (
      <div className='login-form-container'>
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
            <input
              className='color-button-login'
              onClick={this.closeModal}
              type="submit"
              value="Log In" />
            <br/>
            <span className='login-alternative'>
              Don't have an account?
            </span>
            <br/>
            <input
              className='color-button-login'
              onClick={this.demoSignin}
              type='submit'
              value='Demo Log In' />
            <br/>
            <input
              className='clear-button-login'
              type="button"
              value="Join"
              onClick={this.props.handleSignup} />
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
