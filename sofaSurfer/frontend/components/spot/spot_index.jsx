import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import SpotIndexItem from './spot_index_item';

class SpotIndex extends React.Component {
  componentDidMount() {
    this.props.fetchSpots();
  }

  render () {
    console.log(this.props);
    let { spots } = this.props;

    if (this.props.spots) {
      spots = spots.map(spot => <SpotIndexItem key={spot.id} spot={spot} />);
    } else {
      spots = [];
    }

    console.log(spots);
    return (
      <div>
        <br/><br/><br/>
        <section className='spots-index'>
          <ul>
            {spots}
          </ul>
        </section>;
      </div>
    );
  }
}

export default SpotIndex;
