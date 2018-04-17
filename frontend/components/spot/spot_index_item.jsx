import React from 'react';
import { Link } from 'react-router-dom';

const SpotIndexItem = ({ spot }) => (
  <li className="spot-index-item">
    <Link
      to={`/locations/${spot.id}`}
      style={{ textDecoration: 'inherit', color: 'inherit' }}>
      <span className='spot-index-item-location'>{spot.neighborhood} district</span>
      <img
        src={spot.img_url}
        alt={`image of ${spot.neighborhood}`}
        />
    </Link>
  </li>
);

export default SpotIndexItem;
