import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    console.log('haha');
  }



  render () {
    console.log('aloha');
    let { username, location, hosting } = this.props.currentUser;

    let guests;
    if (hosting) {
      guests = "Accepting Guests";
    } else {
      guests = "Not Accepting Guests";
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
            <section className='locations-box'>
              <h2> Explore the city's best spots with locals... </h2>
              <Link to='/locations'>
                locations
              </Link>
            </section>

            <section className='bookings-box'>
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
