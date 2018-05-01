import React from 'react';
import { Link } from 'react-router-dom';

class UserHostingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.currentUser.id,
      hosting: this.props.currentUser.hosting,
    };

    this.handleUpdateHosting = this.handleUpdateHosting.bind(this);
  }

  handleUpdateHosting(e) {
    e.preventDefault();
    this.props.updateUser(this.state);
  }

  render () {
    let { hosting } = this.props.currentUser;
    let guests = hosting ? "Accepting Guests" : "Not Accepting Guests";

    this.state.hosting = !this.state.hosting;

    return (
      <section className='guests'>
        <div>
          { guests }
        </div>
        <button
          className='search-color-button'
          onClick={ this.handleUpdateHosting }
          >
          Change Hosting Availability
        </button>
      </section>
    );
  }
}
export default UserHostingForm;
