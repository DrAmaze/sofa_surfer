import React from 'react';
import { withRouter } from 'react-router-dom';

class UserSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchUsers(this.state.searchTerm);
  }

  render() {
    return (
    <div className="user-search">
      <ul className='user-search-header'>
        <li>
          Hosts
        </li>
        <li>
          Travelers
        </li>
      </ul>

      <form onSubmit={this.handleSubmit} className='user-search-form'>
        <div className='user-params'>
          <div className='username'>
            <span>
              <label> Filter Hosts </label>
            </span>
            <input
              type='text'
              onChange={ this.update('searchTerm') } />
          </div>

          <div className='number-guests'>
            <span>
              <label> # of Travelers </label>
            </span>
            <select className='num-travelers' selected='1'>
              <option disabled value='Any'>Any</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
            </select>
          </div>

        </div>

        <div className='booking-form-button'>
          <button className='search-color-button'>
            Search
          </button>
        </div>
      </form>
    </div>);
  }
}

export default withRouter(UserSearch);
