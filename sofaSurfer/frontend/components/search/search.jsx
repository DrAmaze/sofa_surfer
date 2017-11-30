import React from 'react';

import UserSearchItem from './user_search_item';
import SpotSearchItem from './spot_search_item';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: '',
      spots: '',
      searchTerm: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchSearchResults(this.state.searchTerm).then(() =>
      this.props.history.push('/search')
    );
  }

  render() {
    return (
      <nav className="search">
        <h3 className="view-header">SEARCH</h3>
        <form className='search-form' onSubmit={this.handleSubmit}>
          <input
            type="search"
            onChange={this.handleInput('searchTerm')}
            onSubmit={this.handleSubmit}
            value={this.state.searchTerm}
            className="search-bar"
            placeholder="Start typing..."
          />
        </form>
      </nav>
    );
  }
}

export default Search;
