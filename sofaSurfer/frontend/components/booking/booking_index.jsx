import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import BookingIndexItem from './booking_index_item';
import BookingForm from './booking_form';


class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }
  componentDidMount() {
    this.props.fetchBookings();
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  handleNewBooking(e) {
    e.preventDefault();
    this.setState({ modalOpen: true  });
  }

  render () {

    let { bookings } = this.props;

    if (this.props.bookings) {
      bookings = bookings.map(booking =>
        <BookingIndexItem
          key={booking.id}
          booking={booking} />
    );
    } else {
      bookings = [];
    }

    const style = {
      overlay : {
        position        : 'fixed',
        top             : 0,
        left            : 0,
        right           : 0,
        bottom          : 0,
        backgroundColor : 'rgba(25, 25, 25, 0.90)',
        zIndex          : 10
      },
      content : {
        position        : 'relative',
        top             : '10px',
        border          : '1px solid #ccc',
        zIndex          : 11,
        background      : 'white',
        borderRadius    : '5px',
        width           : '70%',
        height          : '555px',
        marginLeft      : 'auto',
        marginRight     : 'auto',
      }
    };

    const book = <BookingForm
      closeModal={this.closeModal}
      handleNewBooking={this.handleNewBooking} />;

    return (
      <div className='bookings'>
        <br/><br/><br/>
        <h1>These are your current bookings</h1>
        <div onClick={this.openModal}>
          yooooo
        </div>
        <section className='bookings-index'>
          <ul>
            {bookings}
          </ul>
        </section>
        <Modal
          className='booking-modal'
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          style={style}>
          {book}
        </Modal>
      </div>
    );
  }
}

export default Booking;
