import React from 'react';

class UserListItem extends React.Component {
  render () {
    const { user } = this.props;
    const {
      username,
      email,
      phone,
      age,
      about_me,
      img_url
    } = user;

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

    let image;
    if (img_url) {
      image = <img src={img_url} alt='user image' />;
    } else {
      image = <img src='https://staticcdn.selio.com/adoos-static/img/user_default.png' alt='blank image' />;
    }

    return (
      <li className='spot-host'>

        <div className='user-image'>
          { image }
        </div>
        <div className='host-info'>
          <h3>{ username }</h3>
          <div> Email: { email } </div>
          <div> Phone: { phoneNumber } </div>
          <div> Age: { age } </div>
        </div>
        <div className='host-about-me'>
          <p> { about_me } </p>
        </div>
      </li>
    );
  }
}

export default UserListItem;
