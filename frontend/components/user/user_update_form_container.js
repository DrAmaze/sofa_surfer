import { connect } from 'react-redux';

import UserUpdateForm from './user_update_form';
import { fetchUser, updateUser } from '../../actions/user_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user)),
  fetchUser: id => dispatch(fetchUser(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserUpdateForm);
