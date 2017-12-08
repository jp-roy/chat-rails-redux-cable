export default function(state = null, action) {
  switch (action.type) {
    case 'GET_CHANNELS':
      return action.payload;
    case 'CREATE_CHANNEL':
      let newState = state.slice(0);
      newState.push(action.payload.name);
      return newState;
    default:
      return state;
  }
}
