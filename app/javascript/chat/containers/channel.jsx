import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getMessages } from '../actions';
import MessageForm from '../containers/message_form.jsx'

import stringToColour from '../utils/channel.js';
import Moment from 'react-moment';
import Emojify from 'react-emojione';
import cable from "actioncable";

class Channel extends Component {
  constructor(props){
    super(props);
    this.updateMessageState = this.updateMessageState.bind(this);
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
  }

  componentWillUnmount() {
    // this.props.unsuscribeFromActionCable
  }

  componentDidUpdate() {
    this.messageList.scrollTop = this.messageList.scrollHeight;
  }

  updateMessageState = (data) => {
    debugger
    console.log(data)
  }


  // updateCommentState(comment) {
  //     let comments = [...this.state.comments]
  //     let commentCopy = comments.slice()
  //     let commentIndex = commentCopy.findIndex((element, index, array) => element.id == comment.id)
  // if (commentIndex == -1) {
  //       commentCopy.push(comment)
  //     } else {
  //       commentCopy[commentIndex] = comment
  //     }
  // this.setState( {comments: commentCopy} )
  //   }

  //   render() {
  //     const propState = this
  //     App.comments = App.cable.subscriptions.create({
  //       channel: 'CommentsChannel',
  //       thread: `${this.props.threadId}`
  //     }, {
  //       received: function(data) {
  //       propState.updateCommentState(data)
  //     }
  //   });


  render() {
    App.messages = App.cable.subscriptions.create(
      { channel: 'ChatChannel', channel_id: this.props.selectedChannel },
      { received: (data) => this.updateMessageState(data) }
    )

    return (
      <div className="channel">
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
        <MessageForm selectedChannel={this.props.selectedChannel} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getMessages },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Channel);
