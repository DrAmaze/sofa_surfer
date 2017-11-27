import React from 'react';
import { Link } from 'react-router-dom';

import { ProtectedRoute } from '../../util/route_util';

class SpotShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
      <div className="single-spot-show">
        <br/><br/><br/>
        <div className="single-spot">
          <Link to="/locations"> Back to spots Index </Link>
        </div>
      </div>
    );
  }
}

export default SpotShow;
