import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const SpotPreviewItem = ({ spot }) => (
  <li className="spot-preview-item">
    <Link
      to={`/locations/${spot.id}`}
      style={{ textDecoration: 'inherit', color: 'inherit', textShadow: '2px 2px' }}>
      <span className='spot-index-item-location'>{spot.neighborhood} district</span>
      <img
        src={spot.img_url}
        alt={`image of ${spot.neighborhood}`}
        />
    </Link>
  </li>
);

export default withRouter(SpotPreviewItem);
