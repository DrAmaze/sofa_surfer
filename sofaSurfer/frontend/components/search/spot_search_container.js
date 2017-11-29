import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Search from './spot_search_container';


import { fetchSpots, fetchSpot } from '../../actions/spot_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Search));
