import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectChannel } from '../actions';

class Channels extends Component {

  render() {
    return (
      <div className="channels">
        {this.props.channels.map((channel) =>
          <p key={channel}
              className={channel === this.props.selectedChannel ? "selected" : ""}
          >
            {channel}
          </p>
        )}
        <i className="fa fa-plus-square" aria-hidden="true"></i>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps)(Channels);
