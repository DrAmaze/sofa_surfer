import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

class UserUpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.currentUser.id,
      email: this.props.currentUser.email,
      phone: this.props.currentUser.phone,
      age: this.props.currentUser.age,
      hosting: this.props.currentUser.hosting,
      img_url: this.props.currentUser.img_url,
      about_me: this.props.currentUser.about_me
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillMount() {
    this.props.clearUserErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearUserErrors();
    let user = this.state;
    this.props.updateUser(user)
    .then(() => this.props.closeModal());
  }

  renderErrors () {
    if (this.props.errors) {
      return (
        <ul>
          { this.props.errors.map((err, i) => (
            <li key={ `error-${i}` }>
              { err }
            </li>
          ))}
        </ul>
      );
    }
  }

  render () {
    return (
      <div className="booking-form-container">
        <form onSubmit={ this.handleSubmit } className="booking-form-box">
          <nav className='login-head'>
            <div>
              <h4>Update User Information</h4>
              <span
                onClick={ this.props.closeModal }
                className="login-form-close">
                x
              </span>
            </div>
            <div className='session-errors'>
              { this.renderErrors() }
            </div>
          </nav>
          <div className="booking-form">
            <br/>
            <label>
              Email
              <br/>
              <input type="text"
                value={ this.state.email }
                onChange={ this.update('email') }
                className="booking-input"
                placeholder={ this.state.email }
              />
            </label>
            <br/><br/>
            <label>
              Phone
              <br/>
              <input type="text"
                value={ this.state.phone }
                onChange={ this.update('phone') }
                className="booking-input"
                placeholder={ this.state.phone }
              />
            </label>
            <br/><br/>
            <label>
              age
              <br/>
              <input type="number"
                value={ this.state.age}
                onChange={ this.update('age')}
                className="booking-input"
                placeholder={ this.state.age}
              />
            </label>
            <br/><br/>
            <label>
              image url
              <br/>
              <input type="text"
                value={ this.state.img_url }
                onChange={ this.update('img_url') }
                className="booking-input"
                placeholder={ this.state.img_url }
              />
            </label>
            <br/><br/>
            <label>
              About Me
              <br/>
              <input type="text"
                value={ this.state.about_me }
                className="booking-input"
                onChange={ this.update('about_me') }
                placeholder={ this.state.about_me }
              />
            </label>
            <br/>

            <br/>
          </div>
          <footer className='booking-submit'>
            <button
              className='create-button'
              onClick={ this.closeModal }
              type="submit"
              value="Update">Update</button>
          </footer>
        </form>
      </div>
    );
  }
}

export default withRouter(UserUpdateForm);
