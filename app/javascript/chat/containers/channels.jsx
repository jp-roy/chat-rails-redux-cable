import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { createChannel } from '../actions';

class Channels extends Component {
  newChannel = () => {
    const name = prompt("What is the new channel name ?");
    this.props.createChannel(name);
  }

  render() {
    return (
      <div className="channels">
        {this.props.channels.map((channel) =>
          <Link to={`/channels/${channel}`}>
            <p key={channel}
              className={channel === this.props.selectedChannel ? "selected" : ""}
            >
              {channel}
            </p>
          </Link>
        )}
        <i className="fa fa-plus-square" aria-hidden="true" onClick={this.newChannel}></i>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createChannel },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Channels);
