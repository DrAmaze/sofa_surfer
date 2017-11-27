import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const SpotPreviewItem = ({ spot }) => (
  <li className="spot-preview-item">
    <Link to={`/locations/${spot.id}`}>
      <span>{spot.id}</span>
      <span>{spot.street}, {spot.neighborhood}</span>
    </Link>
  </li>
);

export default withRouter(SpotPreviewItem);
