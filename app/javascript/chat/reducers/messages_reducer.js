export default function(state = null, action) {
  switch (action.type) {
    case 'GET_MESSAGES':
      return action.payload.messages;
    case 'SEND_MESSAGE':
      let newState = state.slice(0);
      newState.push(action.payload);
      return newState;
    case 'SELECT_CHANNEL':
      return []
    default:
      return state;
  }
}
