import { connect } from 'react-redux';

import UserUpdateForm from './user_update_form';
import { fetchUser, updateUser } from '../../actions/user_actions';
import { clearUserErrors } from '../../actions/error_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors.user_errors
});

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user)),
  fetchUser: id => dispatch(fetchUser(id)),
  clearUserErrors: () => dispatch(clearUserErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserUpdateForm);
