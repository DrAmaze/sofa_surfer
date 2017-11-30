import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ReviewIndex extends React.Component {
  componentDidMount() {
    this.props.fetchReviews(this.props.userId);

  }

  render () {
    let { reviews } = this.props;
    if (reviews.length > 0) {
      reviews = reviews.map(review =>
        <ReviewIndexItem
          key={review.id}
          review={review} />);
    } else {
      reviews = [];
    }

    return (
      <div className='reviews'>
        <br/><br/><br/>
        <h1> Here are some reviews </h1>
        <section className='reviews-index'>
          <ul>
            {reviews}
          </ul>
        </section>
      </div>
    );
  }
}

export default ReviewIndex;
