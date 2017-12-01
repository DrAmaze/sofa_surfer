import React from 'react';

class UserSearchResultItem extends React.Component {
  render () {
    const { user } = this.props;
    const {
      username,
      email,
      about_me,
      img_url
    } = user;

    let image;
    if (img_url) {
      image = <img src={img_url} alt='user image' />;
    } else {
      image = <img src='https://staticcdn.selio.com/adoos-static/img/user_default.png' alt='blank image' />;
    }

    return (
      <li className='user-search-result-item'>

        <div className='user-search-result-image'>
          {image}
        </div>
        <div className='basic-user-info'>
          <h3> Username: { username }</h3>
          <h3> Email: { email } </h3>
        </div>
      </li>
    );
  }
}

export default UserSearchResultItem;
