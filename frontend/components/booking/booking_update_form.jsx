import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

class BookingUpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.booking.id,
      traveler_id: this.props.currentUser.id,
      host_id: this.props.booking.host_id,
      location_id: this.props.booking.location_id,
      arrival: this.props.booking.arrival.toString().slice(0,10),
      departure: this.props.booking.departure.toString().slice(0,10),
      description: this.props.booking.description
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleDeletion = this.handleDeletion.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let booking = {
      id: this.props.booking.id,
      traveler_id: this.props.currentUser.id,
      host_id: parseInt(this.state.host_id),
      location_id: parseInt(this.state.location_id),
      arrival: new Date(this.state.arrival),
      departure: new Date(this.state.departure),
      description: this.state.decription
    };
    this.props.updateBooking(booking)
    .then(() => this.props.closeModal());
  }

  handleDeletion(e) {
    e.preventDefault();
    let bookingId = this.props.booking.id;
    this.props.deleteBooking(bookingId)
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
    const { deleteBooking } = this.props;

    // Description isn't required
    const description = this.state.description ? this.state.description : '';

    let { users } = this.props;
    let hosts;
    let hostItems;
    let hostId;
    if (this.props.users.length > 0) {
      hosts = users.filter(user =>
        user.hosting && parseInt(user.location_id) === parseInt(this.state.location_id)
      );
      hostItems = hosts.map((host, i) => {
        if (host.id === this.state.host_id) {
          hostId = i;
        }
        return <option value={i} key={i}>{ host.username }</option>;
      });
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
          selected={ hostId }
          >
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
              <h4>Update Trip to the {this.props.booking.spot}</h4>
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
            { hostForm }
            <br/><br/>
            <label>
              Trip Description
              <br/>
              <input type="text"
                value={ description }
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
              value="Update">Update</button>
            <button className='booking-cancel'
              onClick={this.handleDeletion}>Delete</button>
          </footer>
        </form>
      </div>
    );
  }
}

export default withRouter(BookingUpdateForm);
