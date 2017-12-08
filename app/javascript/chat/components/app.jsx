import React from 'react';

import Channels from '../containers/channels.jsx'
import Channel from '../containers/channel.jsx'

const App = (props) => {
  return (
    <div className="app">
      <div className="logo">
      </div>
      <Channels selectedChannel={props.match.params.channel} />
      <Channel selectedChannel={props.match.params.channel} />
    </div>
  );
};

export default App;
