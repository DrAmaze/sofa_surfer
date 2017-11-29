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

    let image;
    if (img_url) {
      image = <img src={img_url} alt='user image' />
    } else {
      image = <img src='https://staticcdn.selio.com/adoos-static/img/user_default.png' alt='blank image' />
    }

    return (
      <li className='spot-host'>

        <div className='user-image'>
          {image}
        </div>
        <div className='host-info'>
          <h3>{ username }</h3>
          <div> { email } </div>
          <div> { phone } </div>
          <div> { age } </div>
        </div>
        <div className='host-about-me'>
          <p> { about_me } </p>
        </div>
      </li>
    );
  }
}

export default UserListItem;
