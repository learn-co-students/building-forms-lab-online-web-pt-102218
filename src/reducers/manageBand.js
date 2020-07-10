export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      console.log("New State:", state.bands.concat(action.payload))
      return { bands: state.bands.concat(action.payload)}
    default:
      console.log("returning initial state")
      return state
  }
};
