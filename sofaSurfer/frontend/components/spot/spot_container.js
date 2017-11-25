import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Spot from './spot';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Spot));
