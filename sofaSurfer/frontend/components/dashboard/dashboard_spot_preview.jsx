import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const SpotPreviewItem = ({ spot }) => (
  <li className="spot-preview-item">
    <Link
      to={`/locations/${spot.id}`}
      style={{textDecoration: 'none'}}>
      <span className='spot-preview' >
        {spot.neighborhood}
      </span>
    </Link>
    <img src={spot.img_url} />
  </li>
);

export default withRouter(SpotPreviewItem);
