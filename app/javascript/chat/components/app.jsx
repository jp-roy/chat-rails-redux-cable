import React from 'react';

import Channels from '../containers/channels.jsx'
import Channel from '../containers/channel.jsx'

const App = () => {
  return (
    <div className="app">
      <div className="logo">
      </div>
      <Channels />
      <Channel />
    </div>
  );
};

export default App;
