import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Splash extends React.Component {

  render () {
    return (
      <div className='splash'>
        <h1 className='clone-screen'>CouchSurfing Clone</h1>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <section className='splash-title'>
          <h1>Stay with Locals and Meet Travelers</h1>
          <h4>Share Authentic Travel Experiences</h4>
          <input className='color-button' type="submit" value="Join" onClick={this.handleSignup} />
        </section>

        <section>
          <h1 className='splash-title'>Why Join?</h1>
          <ul>
            <li>

            </li>
            <li>

            </li>
            <li>

            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default withRouter(Splash);
