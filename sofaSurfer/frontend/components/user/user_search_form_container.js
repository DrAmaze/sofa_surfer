import React from 'React';
import { connect } from 'react-redux';
import UserSearch from './user_search_form';
import { searchUsers }from '../../actions/user_actions';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = dispatch => ({
  searchUsers: searchTerm => dispatch(searchUsers(searchTerm))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSearch);
