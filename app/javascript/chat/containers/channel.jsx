import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getMessages } from '../actions';
import MessageForm from '../containers/message_form.jsx'

import stringToColour from '../../assets/javascript/channel.js';
import Moment from 'react-moment';
import Emojify from 'react-emojione';

class Channel extends Component {
  constructor(props){
    super(props);
    this.state = ({
      intervalId: null
    });
  }

  componentWillMount() {
    this.props.getMessages(this.props.selectedChannel);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.selectedChannel !== nextProps.selectedChannel) {
      this.props.getMessages(nextProps.selectedChannel)
    };
  }

  componentDidMount() {
    const intervalId = setInterval(() => this.props.getMessages(this.props.selectedChannel), 3000);
    this.setState({ intervalId: intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  componentDidUpdate() {
    this.messageList.scrollTop = this.messageList.scrollHeight;
  }

  render() {
    return (
      <div className="channel">
        <h1>Channel {this.props.selectedChannel}</h1>
        <div className="message-list" ref={(div) => { this.messageList = div; }}>
          {this.props.messages.map((message) =>
            <div className="message" key={message.created_at}>
              <div className="header">
                <span className="author" style={{ color: stringToColour(message.author) }}><strong>{message.author}</strong></span>
                <span className="time">&nbsp;-&nbsp;
                  <Moment format="HH:m:ss">
                    {message.created_at}
                  </Moment>
                </span>
              </div>
              <div className="content">
                <Emojify>
                  {message.content}
                </Emojify>
              </div>
            </div>
          )}
        </div>
        <MessageForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel,
    messages: state.messages,
    currentUsername: state.currentUsername
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getMessages },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Channel);
