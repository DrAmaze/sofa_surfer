import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import SpotPreviewItem from './dashboard_spot_preview';
import BookingPreviewItem from './dashboard_booking_preview';
import UserUpdateFormContainer from '../user/user_update_form_container';
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
      img_url: 'https://cdn2.iconfinder.com/data/icons/lil-faces/239/lil-face-19-512.png',
      modalOpen: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleUpdateUser = this.handleUpdateUser.bind(this);
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

  handleUpdateUser(e) {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
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

    if (!img_url) {
      img_url = 'http://www.iconninja.com/files/411/435/758/casual-girl-user-female-avatar-person-icon.svg';
      this.props.currentUser.img_url = img_url;
    }
    let image = <img src={ img_url } alt='user image' />;

    if (!street) {
      street = '';
      this.props.currentUser.street = street;
    }

    const style = {
      overlay : {
        position        : 'fixed',
        top             : 0,
        left            : 0,
        right           : 0,
        bottom          : 0,
        backgroundColor : 'rgba(25, 25, 25, 0.90)',
        zIndex          : 10
      },
      content : {
        position        : 'relative',
        top             : '10px',
        border          : '1px solid #ccc',
        zIndex          : 11,
        background      : 'white',
        borderRadius    : '5px',
        width           : '70%',
        marginLeft      : 'auto',
        marginRight     : 'auto',
      }
    };
    const userUpdate = <UserUpdateFormContainer
      closeModal={ this.closeModal }
      handleUpdateUser={ this.handleUpdateUser }
      updateUser={ this.updateUser }
      user={ this.props.currentUser }
    />;

    let guests;
    if (hosting) {
      guests = "Accepting Guests";
    } else {
      guests = "Not Accepting Guests";
    }

    let { spots } = this.props;
    let spotsPreview;

    if (this.props.spots.length > 0) {
      let previews1, previews2, previews3;

      if(spots.length >= 3) {
        previews1 = parseInt(Math.random() * spots.length);
        while (previews2 === previews1 || !previews2) {
          previews2 = parseInt(Math.random() * spots.length);
        }
        while (previews3 === previews2 || previews3 === previews1 || !previews3) {
          previews3 = parseInt(Math.random() * spots.length);
        }

        let spot1 = spots[previews1];
        let spot2 = spots[previews2];
        let spot3 = spots[previews3];
        spotsPreview = <div className='spot-preview'>
            <SpotPreviewItem key={1} spot={spot1}/>
            <SpotPreviewItem key={2} spot={spot2} />
            <SpotPreviewItem key={3} spot={spot3} />
          </div>;
      } else {
        spotsPreview = '';
      }
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

    let phoneNumber;
    if (phone) {
      let digits = phone.split('');
      phoneNumber = ['('];
      for(let i = 0; i < digits.length; i++) {
        phoneNumber.push(digits[i]);
        if(i == 2) { phoneNumber.push(') '); }
        if(i == 5) { phoneNumber.push('-'); }
      }
      phoneNumber.join('');
    } else {
      phoneNumber = '';
    }

    return (
      <div>
        <br/><br/><br/>
        <div className='dashboard'>
          <section className='user'>

            <Link
              to='/dashboard'
              style={{ textDecoration: 'none', color: 'inherit'}}>
              { image }
            </Link>
            <h3 className='user-dashboard'>
              { username }
            </h3>
            <br/>
            <h4 className='street-home'>{ street }, { home }</h4>
            <h4 className='home'>San Francisco, CA, USA</h4>
            <br/>
            <div>{ guests }</div>
            <br/>
          </section>

          <div className='information'>
            <section className='box' id='locations'>
              <div className='dash-title'>
                <Link to='/locations'
                  style={{ textDecoration: 'none', color: 'inherit' }}>
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

            <section className='box-about-me' id='reviews'>
              <div className='dash-title'>
                <Link
                  to='/dashboard'
                  style={{ textDecoration: 'none', color: 'inherit'}}>
                  About Me
                </Link>
              </div>
              <div className='user-attributes'>
                <div className='personal-user-information'>
                  <div>
                    <h4>
                      Email :
                    </h4>
                    { email }
                  </div>
                  <div>
                    <h4>
                      Phone :
                    </h4>
                    { phoneNumber }
                  </div>
                  <div>
                    <h4>
                      Age:
                    </h4>
                    { age }
                  </div>
                </div>
                <div className='personal-about-me-information'>
                  <div className='personal-about-me'>
                    { about_me }
                  </div>
                  <br/><br/>
                  <div className='hosted'>
                    <button
                      className='search-color-button'
                      onClick={ this.openModal }>
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <br/><br/>
        <Modal
          className='booking-modal'
          isOpen={ this.state.modalOpen }
          onRequestClose={ this.closeModal }
          shouldCloseOnOverlayClick={ true }
          shouldCloseOnEsc={ true }
          style={ style }>
          { userUpdate }
        </Modal>
      </div>
    );
  }
}

export default Dashboard;
