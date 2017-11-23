import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { login, logout, signup } from '../../actions/session_actions';
import SignupForm from './signup';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  formType: 'signup'
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm));
