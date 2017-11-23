import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Dashboard from './dashboard';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard));
