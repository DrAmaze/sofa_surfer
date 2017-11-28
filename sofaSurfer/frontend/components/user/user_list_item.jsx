import React from 'react';

class UserListItem extends React.Component {
  render () {
    const { user } = this.props;
    const {
      username,
      email,
      phone,
      age,
      about_me
    } = user;

    return (
      <li className='spot-host'>
        <h3>{ username }</h3>
        <div className='host-info'>
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
