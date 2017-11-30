import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SpotSearchItem extends React.Component {
  render () {
    const { spot } = this.props;
    const { neighborhood, spotId } = spot;

    return (
      <li className="spot-search-item">
        <Link to={`/locations/${spot.id}`}
          style={{ textDecoration: 'none', color: 'gray'}}>
          { neighborhood }
        </Link>
      </li>
    );
  }
}

export default SpotSearchItem;
