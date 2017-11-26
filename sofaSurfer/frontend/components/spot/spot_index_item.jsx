import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const SpotIndexItem = ({ spot }) => (
  <li className="spot-index-item">
    <Link to={`/locations/${spot.id}`}>
      <span>{spot.id}</span>
      <span>{spot.street}, {spot.neighborhood}</span>
    </Link>
  </li>
);

export default withRouter(SpotIndexItem);
