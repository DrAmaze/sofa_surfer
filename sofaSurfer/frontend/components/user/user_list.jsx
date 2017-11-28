import React from 'react';

import UserListItem from './user_list_item.jsx';

class UserList extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount () {
    this.props.fetchUsers();
  }

  render () {
    let { users, spot } = this.props;
    let userItems;
    let hosts = [];
    if (users.length > 0) {
      hosts = users.filter(user =>
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
