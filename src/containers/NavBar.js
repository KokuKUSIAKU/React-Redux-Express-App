/* eslint-disable */
import React from "react";
/* eslint-enable*/
import Nav from "../components/Nav";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions";

function mapStateToProps( state ) {
  return {
    filter: state.filter
  }; 
}

function mapDispachToProps( dispatch ) {
  return bindActionCreators( actionCreators, dispatch );
}

const NavBar = connect(
  mapStateToProps,
  mapDispachToProps
)( Nav );

export default NavBar; 