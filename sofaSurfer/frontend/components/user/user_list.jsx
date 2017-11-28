import React from 'react';

import UserListItem from './user_list_item.jsx';

class UserList extends React.Component {
  componentDidMount () {
    this.props.fetchUsers();
  }

  render () {
    let { users } = this.props;

    let userItems;
    if (users) {
      let hosts = users.filter(user =>
        user.hosting
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
        <ul className='hosts-list'>
          { userItems }
        </ul>
      </div>
    );
  }
}

export default UserList;
