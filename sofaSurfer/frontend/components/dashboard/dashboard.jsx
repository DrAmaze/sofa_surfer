import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import SpotPreviewItem from './dashboard_spot_preview';
import BookingPreviewItem from './dashboard_booking_preview';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchSpots();
  }

  render () {
    let { username, location, hosting } = this.props.currentUser;

    let guests;
    if (hosting) {
      guests = "Accepting Guests";
    } else {
      guests = "Not Accepting Guests";
    }

    let { spots } = this.props;
    let spotsPreview;
    if (this.props.spots.length > 0) {
      let previews = parseInt(Math.random() * 8);
      let spot1 = spots[previews];
      let spot2 = spots[previews+1];
      let spot3 = spots[previews+2];

      spotsPreview =
        <div className='spot-preview'>
            <SpotPreviewItem key={spot1.id} spot={spot1}/>
            <SpotPreviewItem key={spot2.id} spot={spot2} />
            <SpotPreviewItem key={spot3.id} spot={spot3} />
        </div>;
    }

    let { bookings } = this.props;
    let bookingPreview;
    if (this.props.bookings.length > 0) {
      bookingPreview =
        <div className='spot-preview'>
          <BookingPreviewItem key={bookings[0].id} booking={bookings[0]}/>
        </div>;
    }

    return (
      <div>
        <br/><br/><br/>
        <div className='dashboard'>
          <section className='user'>
            <h3 className='user-dashboard'> {username} </h3>
            <br/>
            <h3 className='home'> San Francisco, CA, USA </h3>
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
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
