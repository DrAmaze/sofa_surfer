import React from 'react';
import { Link } from 'react-router-dom';
import UserSearchFormContainer from '../user/user_search_form_container';
import UserList from '../user/user_list_container';

class SpotShow extends React.Component {
  componentDidMount () {
    this.props.fetchSpot(this.props.spotId);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.spotId !== nextProps.spotId) {
      this.props.fetchSpot(nextProps.spotId);
    }
  }

  render () {
    let { spot } = this.props;

    if (spot) {
      return (
        <div className="single-spot-show">
          <br/><br/><br/>

          <div className='spot-show-image'>
            <img src={spot.img_url} />
          </div>

          <h1 className='spot-title'>{ spot.neighborhood }</h1>
          <div className="spot-index-link">
            <Link
              to="/locations"
              style={{ textDecoration: 'none', color: 'darkgray', fontWeight: 'bolder' }}>
              Back to San Francisco ...
            </Link>
          </div>
          <UserSearchFormContainer />

          <UserList fetchUsers={ this.props.fetchUsers }/>
        </div>
      );
    } else {
      return (
        <div className='empty'>
          loading...
        </div>
      );
    }
  }
}

export default SpotShow;
