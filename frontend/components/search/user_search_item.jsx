import React from 'react';

class UserSearchItem extends React.Component {
  render () {
    const { user } = this.props;
    const { username } = user;

    return (
      <li className='spot-search-item'>
        <h3>{ username }</h3>
      </li>
    );
  }
}

export default UserSearchItem;
