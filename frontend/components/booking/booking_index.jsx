import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import BookingIndexItem from './booking_index_item';
import BookingFormContainer from './booking_form_container';

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      formType: ''
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleNewBooking = this.handleNewBooking.bind(this);
  }

  componentDidMount() {
    this.props.fetchBookings();
    this.props.fetchUsers();
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  handleNewBooking(e) {
    e.preventDefault();
    this.setState({ modalOpen: true });
  }

  render () {
    let { bookings } = this.props;

    if (this.props.bookings) {
      bookings = bookings.map(booking =>
        <BookingIndexItem
          fetchSpot={ this.props.fetchSpot }
          key={ booking.id }
          booking={ booking }
          />
    );
    } else {
      bookings = [];
    }

    const style = modalUserUpdateStyle;

    const book = <BookingFormContainer
      closeModal={ this.closeModal }
      handleNewBooking={ this.handleNewBooking } />;

    return (
      <div>
        <br/><br/><br/>
        <div className='bookings'>
          <section className='bookings-index'>
            <h1>Public Trips</h1>
            <ul>
              { bookings }
            </ul>
          </section>

          <section className='create-trip'>
            <h3>Create a Trip</h3>
            <button
              className='search-color-button'
              onClick={ this.openModal }>
              New Trip
            </button>
          </section>

          <Modal
            className='booking-modal'
            isOpen={ this.state.modalOpen }
            onRequestClose={ this.closeModal }
            shouldCloseOnOverlayClick={ true }
            shouldCloseOnEsc={ true }
            style={ style }>
            { book }
          </Modal>
        </div>
        <br/><br/>
      </div>
    );
  }
}

export default Booking;
