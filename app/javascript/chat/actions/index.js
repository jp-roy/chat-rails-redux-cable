// TODO: add and export your own actions
export function setChannels() {
  return {
    type: 'SET_CHANNELS',
    payload: channels
  }
}

export function getMessages(channel) {
  const promise = fetch(`/api/v1/channels/${channel}/messages`, {
    credentials: "same-origin"
  }).then(response => response.json());

  return {
    type: 'GET_MESSAGES',
    payload: promise
  };
}

export function sendMessage(content, channel) {
  const body = {
    content: content
  };

  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;

  const promise = fetch(`/api/v1/channels/${channel}/messages`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken
    },
    body: JSON.stringify(body),
    credentials: "same-origin"
  }).then(r => r.json());

  return {
    type: 'SEND_MESSAGE',
    payload: promise
  };
}
