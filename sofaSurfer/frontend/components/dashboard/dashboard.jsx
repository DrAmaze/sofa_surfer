import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import SpotPreviewItem from './dashboard_spot_preview';
import BookingPreviewItem from './dashboard_booking_preview';
import Search from '../search/search_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      phone: '',
      age: 0,
      hosting: false,
      location_id: 0,
      about_me: '',
      street: '',
      img_url: 'http://www.marletinc.com/wp-content/uploads/2017/09/demo-user.png'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    this.props.fetchSpots();
    this.props.fetchBookings();
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

handleSubmit(e) {
  e.preventDefault();
  this.props.updateUser(this.props.user);
}

  render () {
    let {
      username,
      email,
      phone,
      age,
      location_id,
      hosting,
      img_url,
      street,
      home,
      about_me
    } = this.props.currentUser;

    let guests;
    if (hosting) {
      guests = "Accepting Guests";
    } else {
      guests = "Not Accepting Guests";
    }

    let { spots } = this.props;
    let spotsPreview;

    if (this.props.spots.length > 0) {
      let previews = parseInt(Math.random() * 7);
      let spot1 = spots[previews];
      let spot2 = spots[previews+1];
      let spot3 = spots[previews+2];

      spotsPreview = spots.length > 3 ?
        <div className='spot-preview'>
          <SpotPreviewItem key={spot1.id} spot={spot1}/>
          <SpotPreviewItem key={spot2.id} spot={spot2} />
          <SpotPreviewItem key={spot3.id} spot={spot3} />
        </div> : '';
    }

    let { bookings } = this.props;
    let bookingPreview;
    if (bookings.length > 0) {
      if (bookings.length === 1) {
        bookingPreview =
          <ul className='booking-preview'>
            <BookingPreviewItem key={bookings[0].id} booking={bookings[0]}/>
          </ul>;
      } else if (bookings.length === 2) {
        bookingPreview =
          <ul className='booking-preview'>
            <BookingPreviewItem key={bookings[0].id} booking={bookings[0]}/>
            <BookingPreviewItem key={bookings[1].id} booking={bookings[1]}/>
          </ul>;
      } else {
      bookingPreview =
        <ul className='booking-preview'>
          <BookingPreviewItem key={bookings[0].id} booking={bookings[0]}/>
          <BookingPreviewItem key={bookings[1].id} booking={bookings[1]}/>
          <BookingPreviewItem key={bookings[2].id} booking={bookings[2]}/>
        </ul>;
      }
    } else {
      bookingPreview =
        <div className='no-trips'>
          ... You do not have any scheduled trips ...
        </div>;
    }

    let image;
    if (img_url) {
      image = <img src={img_url} alt='user image' />;
    } else {
      image = <img src='https://staticcdn.selio.com/adoos-static/img/user_default.png' alt='blank image' />;
    }

    return (
      <div>
        <br/><br/><br/>
        <div className='dashboard'>
          <section className='user'>

            <Link
              to='/profile'
              style={{ textDecoration: 'none', color: 'inherit'}}>
              {image}
            </Link>
            <h3 className='user-dashboard'>
              {username}
            </h3>
            <br/>
            <h4 className='street-home'> {street}, {home} </h4>
            <h4 className='home'> San Francisco, CA, USA </h4>
            <br/>
            <div> {guests} </div>
          </section>

          <div className='information'>
            <section className='box' id='locations'>
              <div className='dash-title'>
                <Link to='/locations'
                  style={{ textDecoration: 'none', color: 'inherit'}}>
                  Explore the city's best spots with locals...
                </Link>
              </div>
              <ul className='grid-items'>
                { spotsPreview }
              </ul>
            </section>

            <section className='box' id='bookings'>
              <div className='dash-title'>
                <Link
                  to='/bookings'
                  style={{ textDecoration: 'none', color: 'inherit'}}>
                  My Travel Plans
                </Link>
              </div>
              <div className='booking-preview-item'>
                { bookingPreview }
              </div>
            </section>

            <section className='box' id='reviews'>
              <div className='dash-title'>
                <Link
                  to='/profile'
                  style={{ textDecoration: 'none', color: 'inherit'}}>
                  About me
                </Link>
              </div>
              <div className='personal-user-information'>
                <h4>
                  Email :
                </h4>
                { email }
              </div>
              <div className='personal-user-information'>
                <h4>
                  Phone :
                </h4>
                { phone }
              </div>
              <div className='personal-user-information'>
                <h4>
                  Age:
                </h4>
                { age }
              </div>
              <div className='personal-about-me-information'>
                { about_me }
              </div>
            </section>
          </div>
        </div>
        <br/><br/>
      </div>
    );
  }
}

export default Dashboard;
