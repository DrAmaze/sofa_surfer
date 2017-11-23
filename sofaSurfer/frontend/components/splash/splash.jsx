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

        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        <section className='why'>
          <br/><br/>
          <h1 >Why Join?</h1>
          <hr className='underline' />
          <ul>
            <li>
              <img src='https://images.unsplash.com/photo-1501631957818-9f4b96ca2b0f?auto=format&fit=crop&w=1050&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'/>
              <h6>On Surfing</h6>
              <hr className='underline' />
              <p>
                "SofaSurfer has given me the opportunity to experience life.  It's the journies with the people whom I've met on SofaSurfer that have meant the most. It's give life the places I have visited. With SofaSurfer, friends await me at my dream destination."
                <br/><br/>
                "-Paul"
                <br/>
                "(Actually left his sofa)"
              </p>
            </li>
            <li>
              <img src='https://images.unsplash.com/photo-1508956225111-e10f3ac4a5a8?auto=format&fit=crop&w=1350&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'/>
              <h6>On Community</h6>
              <hr className='underline' />
              <p>
                "We can't begin to tell you how much SofaSurfer has meant to us. It's such a great way to experience places the way a true local would. Not only do you see the sights that matter, but you meet people who along the way who really make these experiences everlasting."
                <br/><br/>
                "-Kate and Winston"
                <br/>
                "(Traveling around)"
              </p>
            </li>
            <li>
              <img src='https://images.unsplash.com/photo-1505064192571-30990810d732?auto=format&fit=crop&w=1350&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'/>
              <h6>On Hosting</h6>
              <hr className='underline' />
              <p>
                "I want to be able to show my family that people, no matter their history or geography, are good. We don't have enough money to travel with our kids, so we've opened our doors and our hearts to the world! A lot of the people we met are now friends for life."
                <br/><br/>
                "-Kevin"
                <br/>
                "(Going places)"
              </p>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default withRouter(Splash);
