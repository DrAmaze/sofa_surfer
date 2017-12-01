import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
      img_url: 'http://www.marletinc.com/wp-content/uploads/2017/09/demo-user.png'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
      hosting,
      location_id,
      about_me,
      street,
      img_url,
      home
    } = this.props.currentUser;

    let guests;
    if (hosting) {
      guests = "Accepting Guests";
    } else {
      guests = "Not Accepting Guests";
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
            <div>
              {image}
            </div>
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
            <section className='about-me' id='locations'>
              <div className='dash-title'>
                About Me
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
      <br/><br/><br/>
    </div>


    );
  }
}

export default Profile;
