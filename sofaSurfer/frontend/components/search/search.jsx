import React from 'react';

import UserSearchItem from './user_search_item';
import SpotSearchItem from './spot_search_item';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      users: this.props.users,
      spots: this.props.spots
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.startSearch = this.startSearch.bind(this);
  }

  componentDidMount() {
    this.props.clearSearch();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ users: nextProps.users, spots: nextProps.spots });
  }

  handleSearch(e) {
    e.preventDefault();
    this.setState({
      searchQuery: e.currentTarget.value,
    });
  }

  startSearch() {
    const data = { search: { term: this.state.searchQuery } };
    if (this.state.searchQuery === "") {
      this.props.clearSearch();
    } else {
      this.props.fetchSearchResults(data);
    }
  }

  render() {
    return (
      <nav className="search">
        <h3 className="view-header">SEARCH</h3>
        <form>
          <input
            type="text"
            ref={(input) => { this.searchInput = input; }}
            onChange={this.handleSearch}
            value={this.state.searchQuery}
            className="search-bar"
            placeholder="Start typing..."
          />
        </form>
      </nav>
    );
  }
}

export default Search;
