import React from 'react';
import { values } from 'lodash';
import UserSearchResultItem from '../user/user_search_result_item';
import SpotIndexItem from '../spot/spot_index_item';

class SearchResults extends React.Component {

  render () {
    let { users, spots } = this.props;
    let userItems, spotItems;

    spots = values(spots);
    users = values(users);
    if (users.length > 0) {
      userItems = users.map((user, i) => (
        <UserSearchResultItem
          key={i}
          user={ user } />
      ));
    } else {
      userItems = <div></div>;
    }
    if (spots.length > 0) {
      spotItems = spots.map((spot, i) => (
        <SpotIndexItem
          key={i}
          spot={ spot } />
      ));
    } else {
      spotItems = <div></div>;
    }

    return (
      <div className='search-results'>
        <br/><br/><br/>
        <div>
          <h2>Spot results ...</h2>
          <ul className='spot-results-items'>
            { spotItems }
          </ul>
        </div>
        <div>
          <h2>User results ...</h2>
          <ul className='user-results-items'>
            { userItems }
          </ul>
        </div>
      </div>
      );
    }
  }


export default SearchResults;
