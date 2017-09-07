export function setFilter( filter ) {
  console.log("setFilter action dispatched");
  return {
    type: "SET_FILTER",
    filter
  };
}