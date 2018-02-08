import React from 'react';
import { Link, withRouter } from 'react-router-dom';


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
    let users = this.props.fetchUsers();


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
                onChange={this.update('location_id')}>
                <option selected='selected'> e.g. Presidio
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
            <label>
              Host
              <br/>
              <input type="number"
                min='1'
                onChange={this.update('host_id')}
                placeholder={'1'}
                className="booking-input"/>
            </label>
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

export default withRouter(BookingForm);