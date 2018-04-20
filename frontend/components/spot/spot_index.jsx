import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import SpotIndexItem from './spot_index_item';

class SpotIndex extends React.Component {
  componentDidMount() {
    this.props.fetchSpots();
  }

  render () {
    let { spots } = this.props;

    if (this.props.spots) {
      spots = spots.map((spot, i) => <SpotIndexItem key={i} spot={spot} />);
    } else {
      spots = [];
    }

    return (
      <div className='locations'>
        <br/><br/><br/>
        <h1> Choose your adventure ... </h1>
        <section className='spots-index'>
          <ul>
            { spots }
          </ul>
        </section>
        <br/><br/>
      </div>
    );
  }
}

export default SpotIndex;
