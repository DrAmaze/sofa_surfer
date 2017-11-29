import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      traveler_id: this.props.currentUser.id,
      host_id: 0,
      location_id: 0,
      arrival: '',
      departure: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillMount () {
    this.props.clearSessionErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBooking(this.state)
    .then(() => this.props.closeModal());
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
      <div className="booking-form-container">
        <form onSubmit={this.handleSubmit} className="booking-form-box">
          <nav className='booking-head'>
            <div>
              <h4>Create a Trip</h4>
              <span
                onClick={this.props.closeModal}
                className="login-form-close">
                x
              </span>
            </div>
            <div className='session-errors'>
              {this.renderErrors()}
            </div>
          </nav>
          <div className="login-form">
            <br/>
            <label>
              <select
                className='user-location'
                value={this.state.location_id}
                onChange={this.update('location_id')}>
                <option selected='selected' value='0'>
                  Where are you going?
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
            <br/>
            <label>
              Arriving on
              <input type="date"
                value={this.state.arrival}
                onChange={this.update('arrival')}
                className="login-input"
                placeholder={'e.g. '}
              />
            </label>
            <label>
              Leaving on
              <input type="date"
                value={this.state.departure}
                onChange={this.update('departure')}
                className="login-input"
                placeholder={'e.g. '}
              />
            </label>
            <br/>

            <br/>
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

export default BookingForm;
