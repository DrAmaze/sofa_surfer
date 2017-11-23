import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { login, logout, signup } from '../../actions/session_actions';
import LoginForm from './login';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  formType: 'login'
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm));
