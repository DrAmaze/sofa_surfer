import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import SpotPreviewItem from './dashboard_spot_preview';
import BookingPreviewItem from './dashboard_booking_preview';
import UserUpdateFormContainer from '../user/user_update_form_container';
import Search from '../search/search_container';
import UserHostingForm from '../user/user_hosting_form_container';

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
    this.formatPhoneNumber = this.formatPhoneNumber.bind(this);
    this.generateThreeRandomIndicies - this.generateThreeRandomIndicies.bind(this);
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

  formatPhoneNumber() {
    let phoneNumber;
    let { phone } = this.props.currentUser;
    if (phone) {
      let digits = phone.split('');
      phoneNumber = ['('];
      for(let i = 0; i < digits.length; i++) {
        phoneNumber.push(digits[i]);
        if(i === 2) { phoneNumber.push(') '); }
        if(i === 5) { phoneNumber.push('-'); }
      }
      phoneNumber.join('');
    } else {
      phoneNumber = '';
    }

    return phoneNumber;
  }

  generateThreeRandomIndicies(max) {
    let numbers = [];
    numbers.push(parseInt(Math.random() * max));

    let x = parseInt(Math.random() * max);
    if (numbers.includes(x)) x === max - 1 ? x = 0 : x++;
    numbers.push(x);

    x = parseInt(Math.random() * max);
    if (numbers.includes(x)) x >= max - 2 ? x = 1 : x += 2;
    numbers.push(x);

    return numbers;
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

    let guests;
    if (hosting) {
      guests = "Accepting Guests";
    } else {
      guests = "Not Accepting Guests";
    }

    const userUpdate = <UserUpdateFormContainer
      closeModal={ this.closeModal }
      handleUpdateUser={ this.openModal }
      updateUser={ this.updateUser }
      user={ this.props.currentUser }
    />;

    const style = modalUserUpdateStyle; // from global

    let { spots } = this.props;
    let spotsPreview;
    if (this.props.spots.length > 0) {

      if(spots.length >= 3) {
      let indices = this.generateThreeRandomIndicies(spots.length);

      spotsPreview = <div className='spot-preview'>
          <SpotPreviewItem key={1} spot={spots[indices[0]]} />
          <SpotPreviewItem key={2} spot={spots[indices[1]]} />
          <SpotPreviewItem key={3} spot={spots[indices[2]]} />
        </div>;
      } else {
        spotsPreview = '';
      }
    }

    let { bookings } = this.props;
    let bookingPreview;
    if (bookings.length > 0) {
      bookingPreview = [];
      for (let i = 0; i < 3; i++) {
        if (bookings.length >= i) {
          bookingPreview.push(<BookingPreviewItem key={bookings[i].id} booking={bookings[i]}/>);
        } else {
          break;
        }
      }
    } else {
      bookingPreview =
        <div className='no-trips'>
          ... You do not have any scheduled trips ...
        </div>;
    }

    let phoneNumber = this.formatPhoneNumber();

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
            <section className='dashboard-hosting'>
              <UserHostingForm />
            </section>
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
                <ul className='booking-preview'>
                  { bookingPreview }
                </ul>
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
