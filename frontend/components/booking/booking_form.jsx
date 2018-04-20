import React from 'react';
import { Link } from 'react-router-dom';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      traveler_id: this.props.currentUser.id,
      host_id: 0,
      location_id: 0,
      arrival: '',
      departure: '',
      description: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount () {
    this.props.fetchSpots();
    // this.props.fetchUsers();
  }

  componentWillMount () {
    this.props.clearBookingErrors();
    this.props.fetchUsers();
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearBookingErrors();
    const booking = this.state;
    this.props.createBooking({ booking })
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
    let { users } = this.props;
    let hosts;
    let hostItems;
    if (this.props.users.length > 0) {
      hosts = users.filter(user =>
        user.hosting && parseInt(user.location_id) === parseInt(this.state.location_id)
      );
      hostItems = hosts.map((host, i) => (
        <option value={i} key={i}>{ host.username }</option>
      ));
    } else {
      hostItems = [];
    }

    let hostForm;
    if (this.state.location_id !== 0) {
      hostForm = <label>
        Host
        <br/>
        <select
          className='booking-location'
          onChange={this.update('host_id')}
          selected='0'
          >
          <option value='0' disabled>Select your Host</option>
          { hostItems }
        </select>
      </label>;
    } else {
      hostForm = <div></div>;
    }

    return (
      <div className="booking-form-container">
        <form onSubmit={this.handleSubmit} className="booking-form-box">
          <nav className='login-head'>
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
          <div className="booking-form">
            <br/>
            <label>
              Where are you going?
              <br/>
              <select
                className='booking-location'
                value={this.state.location_id}
                onChange={this.update('location_id')}
                selected='0'>
                <option value='0' disabled> e.g. Presidio
                </option>
                <option value='1'>Presidio</option>
                <option value='2'>Fisherman's Wharf</option>
                <option value='3'>Chinatown</option>
                <option value='4'>Mission</option>
                <option value='5'>Castro</option>
                <option value='6'>Financial</option>
                <option value='7'>Sunset</option>
                <option value='8'>Richmond</option>
                <option value='9'>Haight</option>
                <option value='10'>Tenderloin</option>
              </select>
            </label>
            <br/><br/>
            <label>
              Arriving on
              <br/>
              <input type="date"
                value={this.state.arrival}
                onChange={this.update('arrival')}
                className="booking-input"
                placeholder={'e.g. MM-DD-YYYY'}
              />
            </label>
            <br/><br/>
            <label>
              Leaving on
              <br/>
              <input type="date"
                value={this.state.departure}
                onChange={this.update('departure')}
                className="booking-input"
                placeholder={'e.g. MM-DD-YYYY'}
              />
            </label>
            <br/><br/>
            { hostForm }
            <br/><br/>
            <label>
              Trip Description
              <br/>
              <input type="text"
                className="booking-input"
                onChange={this.update('description')}
                placeholder={'Tell locals about your trip and why they should meet or host you'}
              />
              </label>
              <br/>

              <br/>
            </div>
          <footer className='booking-submit'>
            <button
              className='create-button'
              onClick={this.closeModal}
              type="submit"
              value="Create">Create</button>
            <button className='booking-cancel'
              type="reset"
              onClick={this.closeModal}>Cancel</button>
          </footer>
        </form>
      </div>
    );
  }
}

export default BookingForm;
