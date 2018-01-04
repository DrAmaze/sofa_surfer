import React from 'react';

import UserSearchItem from './user_search_item';
import SpotSearchItem from './spot_search_item';

class Search extends React.Component {
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
    this.props.searchSpots(this.state.searchTerm).then(
      () => this.props.searchUsers(this.state.searchTerm)
    ).then(
      () => this.props.history.push('/search')
    ).then(() => this.setState({ searchTerm: '' }));
  }

  render() {
    return (
      <nav className="search">
        <form className='search-form' onSubmit={this.handleSubmit}>
          <input
            type="search"
            onChange={this.update('searchTerm')}
            onSubmit={this.handleSubmit}
            value={this.state.searchTerm}
            className="search-bar"
            placeholder="Start typing..."
          />
          <button className='search-button' type='submit'>
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </form>
      </nav>
    );
  }
}

export default Search;
