import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectChannel } from '../actions';

class Channels extends Component {

  render() {
    return (
      <div className="channels">
        {this.props.channels.map((channel) =>
          <p key={channel}
             onClick={() => this.props.selectChannel(channel)}
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectChannel },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Channels);
