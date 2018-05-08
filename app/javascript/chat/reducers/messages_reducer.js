export default function(state = null, action) {
  switch (action.type) {
    case 'GET_MESSAGES':
      return action.payload;
    case 'DISPLAY_CABLE_MESSAGE':
      let newState = state.slice(0);
      newState.push(action.payload);
      return newState;
    case 'SEND_MESSAGE':
      return state;
    default:
      return state;
  }
}
