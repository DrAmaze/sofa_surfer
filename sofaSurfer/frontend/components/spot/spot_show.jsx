import React from 'react';
import { Link } from 'react-router-dom';

import { ProtectedRoute } from '../../util/route_util';

const spotShow = ({ spot, spotId, fetchSpot }) => {
  const spots = {
    [spotId]: spot
  };

  return(
    <div className="single-spot-show">
      <div className="single-spot">
        <Link to="/locations"> Back to spots Index </Link>
      </div>

    </div>
  );
};

export default spotShow;
