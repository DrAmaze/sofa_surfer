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
    let user = {
      username: this.props.currentUser.username,
      email: this.props.currentUser.email,
      phone: this.props.currentUser.phone,
      age: this.props.currentUser.age,
      hosting: this.props.currentUser.hosting,
      location_id: this.props.currentUser.location_id,
      about_me: this.props.currentUser.about_me,
      street: '',
      img_url: 'http://www.marletinc.com/wp-content/uploads/2017/09/demo-user.png'
    };
    this.props.updateUser(this.props.currentUser);
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
      image = <img src={img_url} alt='user image' />;
    } else {
      image = <img src='https://staticcdn.selio.com/adoos-static/img/user_default.png' alt='blank image' />;
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
            <h4 className='street-home'> { street } { home } </h4>
            <h4 className='home'>San Francisco, CA, USA</h4>
            <br/>
            <div>{ guests }</div>
          </section>

          <div className='profile-information' id='profile-info'>
            <section className='profile'>
              <div className='profile-title'>
                About Me
              </div>
              <div className='profile-info'>
                <h4>
                  Email:
                </h4>
                <div>{ email }</div>
              </div>
              <div className='profile-info'>
                <h4>
                  Phone:
                </h4>
                <br/>
                <div>{ phone }</div>
              </div>
              <div className='profile-info'>
                <h4>
                  Age:
                </h4>
                <br/>
                <div>{ age }</div>
              </div>
              <div className='profile-about-me-information profile-about-me'>
                { about_me }
              </div>
            <button
              className='search-color-button'
              type='submit'
              value='Update'>
              Update
            </button>
          </section>
          </div>
        </div>
        <br/><br/><br/>
      </div>
    );
  }
}

export default Profile;
