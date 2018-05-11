import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import UserUpdateFormContainer from '../user/user_update_form_container';
import UserHostingForm from '../user/user_hosting_form_container';
import ReviewContainer from '../review/review_container';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount () {
    this.props.fetchReviews();
    this.props.fetchUser(this.props.userId);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.userId !== nextProps.userId) {
      this.props.fetchUser(nextProps.userId);
    }
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
      home,
    } = this.props.person;

    let userHosting;
    let guests = hosting ? "Accepting Guests" : "Not Accepting Guests";
    userHosting = <div>{ guests }</div>;

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
                  About
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
            </section>
            </div>
          </div>
        </div>
        <br/><br/><br/>
      </div>
    );
  }
}

export default Profile;
