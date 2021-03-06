import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import BookingUpdateFormContainer from './booking_update_form_container';

class BookingIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleUpdateBooking = this.handleUpdateBooking.bind(this);
  }

  handleUpdateBooking(e) {
    this.setState({ modalOpen: true, formType: 'updateBooking' });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  render () {
    const style = modalBookingIndexItemStyle;
    console.log(modalBookingIndexItemStyle);
    console.log('hi', modalUserUpdateStyle);

    let { fetchUser, booking } = this.props;
    // const host = fetchUser(this.props.booking.host_id);
    const book = <BookingUpdateFormContainer
      closeModal={ this.closeModal }
      handleUpdateBooking={ this.handleUpdateBooking }
      updateBooking={ this.updateBooking }
      booking={ booking } />;
    return (
      <li className="booking-index-item">
        <div className='arr-dep-book'>
          <h2 style={{ textTransform: 'capitalize' }}>Trip to { booking.spot } district</h2>
          <section>
            <div> <h4>ARR:</h4> { booking.arrival.toString().slice(0,10) }</div>
            <div> <h4>DEP:</h4> { booking.departure.toString().slice(0,10) }</div>
          </section>
        </div>

        <div className='booking-description'>
          <p>{ booking.description }</p>
        </div>

        <div className='hosted'>
          <h3>{ booking.host }</h3>
          <button
            className='search-color-button'
            onClick={ this.openModal }>
            Edit
          </button>
        </div>

        <Modal
          className='booking-modal'
          isOpen={ this.state.modalOpen }
          onRequestClose={ this.closeModal }
          shouldCloseOnOverlayClick={ true }
          shouldCloseOnEsc={ true }
          style={ style }>
          { book }
        </Modal>
      </li>
    );
  }
}

export default BookingIndexItem;
