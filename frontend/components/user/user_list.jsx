import React from 'react';

import UserListItem from './user_list_item.jsx';

class UserList extends React.Component {

  componentWillMount () {
    this.props.fetchUsers();
    this.props.fetchSpot(this.props.spotId);
  }

  render () {
    let { users } = this.props;
    let userItems;
    let hosts = [];
    if (this.props.users) {
      hosts = users.filter(user =>
        user.hosting && parseInt(user.location_id) === this.props.spotId
      );
      userItems = hosts.map(host => (
        <UserListItem
          key={host.id}
          user={ host } />
      ));
    } else {
      userItems = [];
    }

    return (
      <div>
        <header className='user-count'>
          { hosts.length } hosts
        </header>

        <ul className='hosts-list'>
          { userItems }
        </ul>
      </div>
    );
  }
}

export default UserList;
