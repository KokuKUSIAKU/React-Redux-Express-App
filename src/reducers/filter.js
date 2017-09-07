function filter( state = [], action ) {
  switch ( action.type ) {
  case "SET_FILTER":
    console.log( " setfilter reducer running" );
    return action.filter;
  default:
    return state;
  }
}

export default filter; 