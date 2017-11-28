import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      location_id: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render () {

    return (
      <div className="signup-form-container">
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
            <label>
              <select
                className='user-location'
                value={this.state.location_id}
                onChange={this.update('location_id')}>
                <option selected='selected' value='0'>
                  Please select your location
                </option>
                <option value='1'>presidio</option>
                <option value='2'>fisherman's wharf</option>
                <option value='3'>chinatown</option>
                <option value='4'>mission</option>
                <option value='5'>castro</option>
                <option value='6'>financial</option>
                <option value='7'>sunset</option>
                <option value='8'>richmond</option>
                <option value='9'>haight</option>
                <option value='10'>tenderloin</option>
              </select>
            </label>
            <input
              className='color-button-login'
              onClick={this.closeModal}
              type="submit"
              value="Join with Email"
              />
            <br/>
            <span className='login-alternative'>
              Already a member?
            </span>
            <br />
            <input
              className='clear-button-login'
              type="button"
              value="Log in"
              onClick={this.props.handleLogIn} />
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
