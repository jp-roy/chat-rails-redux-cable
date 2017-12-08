// TODO: add and export your own actions
export function setChannels() {
  return {
    type: 'SET_CHANNELS',
    payload: channels
  }
}

export function selectChannel(channel) {
  return {
    type: 'SELECT_CHANNEL',
    payload: channel
  }
}

export function getMessages(channel) {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json());

  return {
    type: 'GET_MESSAGES',
    payload: promise
  };
}

export function sendMessage(channel, author, content) {
  const body = { channel: channel,
    author: author,
    content: content
  };

  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: 'SEND_MESSAGE',
    payload: promise
  };
}
