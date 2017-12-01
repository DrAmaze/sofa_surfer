import React from 'react';
import { values } from 'lodash';
import UserListItem from '../user/user_list_item';
import SpotIndexItem from '../spot/spot_index_item';

class SearchResults extends React.Component {

  render () {

    let { users, spots } = this.props;

    let userItems;
    let spotItems;
    spots = values(spots);
    if (users.length > 0 || spots.length > 0) {
      if (users.length > 0) {
        userItems = users.map(user => (
          <UserListItem
            key={user.id}
            user={ user } />
        ));
      }
      if (spots.length > 0) {
        spotItems = spots.map(spot => (
          <SpotIndexItem
            key={spot.id}
            spot={ spot } />
        ));
      }

      return (
        <div className='search-results'>
          <br/><br/><br/>
          <div>
            <h2> Spot results ... </h2>
            <ul className='spot-results-items'>
              { spotItems }
            </ul>
          </div>
          <div>
            <h2> User results ... </h2>
            <ul className='user-results-items'>
              { userItems }
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          loading ...
        </div>
      );
    }
  }
}

export default SearchResults;
