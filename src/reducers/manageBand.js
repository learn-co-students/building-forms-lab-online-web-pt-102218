export default function manageBand(state = {bands: []}, action) {
  if (action.type === "CREATE_BAND"){
    return ({
      bands: [...state.bands, action.band]
    })
  }
  return state
};
