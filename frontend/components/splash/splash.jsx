import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import LoginForm from '../session_form/login_container';
import SignupForm from '../session_form/signup_container';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  handleSignup(e) {
    e.preventDefault();
    this.setState({ modalOpen: true, formType: 'signup' });
  }

  handleLogIn(e) {
    e.preventDefault();
    this.setState({ modalOpen: true, formType: 'login' });
  }

  render () {
    const session = this.state.formType === 'signup' ? (
      <SignupForm
        closeModal={ this.closeModal }
        handleLogIn={ this.handleLogIn }/>
      ) : (
        <LoginForm
          closeModal={ this.closeModal }
          handleSignup={ this.handleSignup }/>
      );

    const style = modalSessionStyle;

    return (
      <div className='splash'>
        <h1 className='clone-screen'>CouchSurfing Clone</h1>
        <section className='splash-title'>
          <br/><br/><br/><br/><br/><br/><br/><br/>
          <h1>Stay with Locals and Meet Travelers</h1>
          <h4>Share Authentic Travel Experiences</h4>
          <br/>
          <button className='color-button'
            type="submit"
            onClick={ this.handleSignup }>
            Join
          </button>
        </section>

        <section className='why'>
          <br/><br/>
          <h1>Why Join?</h1>
          <hr className='underline' />
          <ul>
            <li>
              <img
                src='https://images.unsplash.com/photo-1501631957818-9f4b96ca2b0f?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
                alt='experiencing life image'/>

              <h6>On Surfing</h6>
              <hr className='underline' />
              <p>
                "SofaSurfer has given me the opportunity to experience life.
                It's the journies with the people whom I've met on SofaSurfer
                that have meant the most. It's give life the places I have
                visited. With SofaSurfer, friends await me at my dream
                destination."
                <br/><br/>
                - Paul
                <br/>
                (Actually left his sofa)
              </p>
            </li>
            <li>
              <img
                src='https://images.unsplash.com/photo-1508956225111-e10f3ac4a5a8?auto=format&fit=crop&w=1350&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
                alt='community image'/>
              <h6>On Community</h6>
              <hr className='underline' />
              <p>
                "We can't begin to tell you how much SofaSurfer has
                meant to us. It's such a great way to experience places
                the way a true local would. Not only do you see the
                sights that matter, but you meet people who along the
                way who really make these experiences everlasting."
                <br/><br/>
                - Kate and Winston
                <br/>
                (Traveling around)
              </p>
            </li>
            <li>
              <img
                src='https://images.unsplash.com/photo-1505064192571-30990810d732?auto=format&fit=crop&w=1350&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
                alt='hosting image'/>
              <h6>On Hosting</h6>
              <hr className='underline' />
              <p>
                "I want to be able to show my family that people,
                no matter their history or geography, are good. We don't
                 have enough money to travel with our kids, so we've
                 opened our doors and our hearts to the world! A lot of
                 the people we met are now friends for life."
                <br/><br/>
                - Kevin
                <br/>
                (Going places)
              </p>
            </li>
          </ul>
        </section>

        <section className='how-it-works'>
          <br/><br/><br/><br/><br/><br/>
          <h1>How It Works</h1>
          <hr className='underline' />
          <ul>
            <li>
              <img
                src='https://ht-assets.couchsurfing.com/assets/icons/discover-amazing-people-75ec5628b259a817d9389816d8b3b9c8369d87c524f0fc29f5fd81d7bdb462e5.png'
                alt='amazing people image'/>
              <h6>Discover Amazing People</h6>
              <hr className='underline' />
              <p>
                "SofaSurfers open their homes and share their lives. Connect and be inspired.."
              </p>
            </li>
            <li>
              <img
                src='https://ht-assets.couchsurfing.com/assets/icons/book-a-stay-64b707177c5c69aa958920761cdd560d7ced3edf3ca7c09c91155c2863f5bdc8.png'
                alt='host image'/>
              <h6>Find a Host</h6>
              <hr className='underline' />
              <p>
                "Connect with hosts, and confirm your stay through the Couchsurfing platform. Your stay with hosts is free."
              </p>
            </li>
            <li>
              <img
                src='https://ht-assets.couchsurfing.com/assets/icons/join-events-23ca802d7e5993838f1122d360dc35b3ef00291507a9a960b435d116baf30979.png'
                alt='Events image'/>
              <h6>Join Events</h6>
              <hr className='underline' />
              <p>
                "Meet travelers in other cities, or in your own city! There's always something new to join."
              </p>
            </li>
          </ul>
          <table className='benefits'>
            <tbody>
              <tr>
                <th></th>
                <th className='table-mid-col-top'>
                  Free
                </th>
                <th>
                  Verified<br/>
                  Members
                </th>
              </tr>
              <tr>
                <td className='table-left'>
                  Stay with local hosts
                </td>
                <td className='table-mid-col'>
                  <span
                    aria-hidden="true"
                    data-icon="" >
                    check
                  </span>
                </td>
                <td>
                  <span>

                  </span>
                </td>
              </tr>
              <tr>
                <td className='table-left'>
                  Host international travelers
                </td>
                <td className='table-mid-col'>
                  <span
                    aria-hidden="true"
                    data-icon="" >
                  </span>
                </td>
              <td>
                <span>
                  check
                </span>
              </td>
              </tr>
              <tr>
                <td className='table-left'>
                  Attend free traveler events
                </td>
                <td className='table-mid-col'>
                  <span
                    aria-hidden="true"
                    data-icon="" >

                  </span>
                </td>
                <td>
                  <span>
                    check
                  </span>
                </td>
              </tr>
              <tr>
                <td className='table-left'>
                  Ad-free website and mobile apps
                </td>
                <td className='table-mid-col'>
                  <span
                    aria-hidden="true"
                    data-icon="" >
                    check
                  </span>
                </td>
                <td>
                  <span>
                  </span>
                </td>
              </tr>
              <tr>
                <td className='table-left'>
                  Be highlighted in search results
                </td>
                <td className='table-mid-col-bottom'>
                  <span
                    aria-hidden="true"
                    data-icon="" >
                    check
                  </span>
                </td>
                <td>
                  <span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <Modal
          className='modal'
          isOpen={ this.state.modalOpen }
          onRequestClose={ this.closeModal }
          shouldCloseOnOverlayClick={ true }
          shouldCloseOnEsc={ true }
          style={ style }>
          { session }
        </Modal>
      </div>
    );
  }
}

export default withRouter(Splash);
