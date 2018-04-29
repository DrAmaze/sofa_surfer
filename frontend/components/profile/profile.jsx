import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import UserUpdateFormContainer from '../user/user_update_form_container';
import UserHostingForm from '../user/user_hosting_form_container';
import ReviewContainer from '../review/review_container';

class Profile extends React.Component {
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
      img_url: 'http://www.marletinc.com/wp-content/uploads/2017/09/demo-user.png',
      modalOpen: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    // this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount () {
    this.props.fetchReviews();
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  toggleHosting(host) {
    this.setState({ hosting: host });
    this.props.updateUser(this.state.user);
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
    this.props.updateUser(this.state.user);
  }

  render () {
    let {
      username,
      email,
      phone,
      age,
      hosting,
      location_id,
      about_me,
      street,
      img_url,
      home
    } = this.props.currentUser;

    let guests = hosting ? "Accepting Guests" : "Not Accepting Guests";

    let image;
    if (img_url) {
      image = <img src={ img_url } alt='user image' />;
    } else {
      image = <img src='https://staticcdn.selio.com/adoos-static/img/user_default.png' alt='blank image' />;
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

    const userHosting = <UserHostingForm
      updateUser={ this.updateUser }
      user={ this.props.currentUser }
    />;

    const userUpdate = <UserUpdateFormContainer
      closeModal={ this.closeModal }
      handleUpdateUser={ this.handleUpdateUser }
      updateUser={ this.updateUser }
      user={ this.props.currentUser }
    />;

    return (
      <div>
        <br/><br/><br/>
        <div className='profile'>
          <section className='profile-header'>
            <div>
              { image }
            </div>
            <h3 className='user-profile'>
              { username }
            </h3>
            <br/>
            <h4 className='street-home'>{ street }, { home }</h4>
            <h4 className='home' id='profile-home'>San Francisco, CA, USA</h4>
            <br/>
          </section>

          <div className='right-profile-col'>

            { userHosting }

            <div className='profile-information' id='profile-info'>

              <section className='profile'>
                <div className='profile-title'>
                  About Me
                </div>
                <div className='profile-info'>
                  <h4>
                    Email:
                  </h4>
                  <div> { email }</div>
                </div>
                <div className='profile-info'>
                  <h4>
                    Phone:
                  </h4>
                  <br/>
                  <div>{ phoneNumber }</div>
                </div>
                <div className='profile-info'>
                  <h4>
                    Age:
                  </h4>
                  <br/>
                  <div> { age }</div>
                </div>
                <div className='profile-about-me-information profile-about-me'>
                  { about_me }
                </div>
                <button
                  className='search-color-button'
                  onClick={ this.openModal }
                  >
                  Edit
                </button>
            </section>
            </div>
          </div>
        </div>
        <br/><br/><br/>
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

export default Profile;
