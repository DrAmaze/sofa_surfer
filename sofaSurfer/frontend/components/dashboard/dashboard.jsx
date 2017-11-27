import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import SpotPreviewItem from './dashboard_spot_preview';

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
    if (this.props.spots) {
      let spot1 = spots[0];
      let spot2 = spots[1];
      let spot3 = spots[2];
      spotsPreview =
        <div>
            <SpotPreviewItem key={spot1.id} spot={spot1}/>
            <SpotPreviewItem key={spot2.id} spot={spot2} />
            <SpotPreviewItem key={spot3.id} spot={spot3} />
        </div>;
    } else {
      spots = [];
    }

    return (
      <div>
        <br/><br/><br/>
        <div className='dashboard'>
          <section className='user'>
            <h3 className='dashboard'> {username} </h3>
            <br/>
            <h3> San Francisco, CA, USA </h3>
            <br/>
            <div> {guests} </div>
          </section>

          <div className='information'>
            <section className='box' id='locations'>
              <h2> Explore the city's best spots with locals... </h2>
              <div className='grid-items'>
                { spotsPreview }
              </div>
              <Link to='/locations'>
                locations
              </Link>
            </section>

            <section className='box' id='bookings'>
              <h2> My Travel Plans </h2>
                <Link to='/bookings'>
                  bookings
                </Link>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
