import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { login, logout, signup } from '../../actions/session_actions';
import LoginForm from './login';
import { clearSessionErrors } from '../../actions/error_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = login;
  return {
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm));
