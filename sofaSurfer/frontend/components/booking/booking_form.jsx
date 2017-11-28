import React from 'react';
import { withRouter } from 'react-router';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      traveler_id: 0,
      host_id: 0,
      location_id: 0,
      arrival: undefined,
      departure: undefined
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(() => this.props.history.push('/'));
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
    const {
      arrival,
      departure,
      traveler_id,
      host_id,
      location_id
    } = this.state;

    return (
      <div className='new-booking'>
        <ul className='new-booking-header'>
          <li>
            Hosts
          </li>
          <li>
            Travelers
          </li>
        </ul>

        <form onSubmit={this.handleSubmit} className='new-booking-form'>
          <div className='arr-dep'>
            <div className='arr'>
              <span>
                <label> Arrive </label>
              </span>
              <input
                type='text'
                className='booking-date'
                placeholder='yy-mm-dd'
                onChange={this.update('arrival')} />
            </div>

            <div className='dep'>
              <span>
                <label> Depart </label>
              </span>
              <input
                type='text'
                className='booking-date'
                placeholder='yy-mm-dd'
                onChange={this.update('departure')} />
            </div>
          </div>

          <div className='number-travelers'>
            <span>
              <label> # of Travelers </label>
            </span>
            <select className='num-travelers'>
              <option value='Any'>Any</option>
              <option selected='selected' value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
            </select>
          </div>

          <div className='booking-form-button'>
            <button className='search-color-button'>
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(BookingForm);
