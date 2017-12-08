import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { sendMessage } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.sendMessage(this.props.selectedChannel, this.state.value);
    this.setState({ value: "" });
  }

  componentDidUpdate(){
    this.messageInput.focus();
  }

  componentDidMount(){
    this.messageInput.focus();
  }

  render() {
    return (
      <div className="message-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            className="form-control form-search"
            value={this.state.value}
            onChange={this.handleChange}
            ref={(input) => { this.messageInput = input; }}
          />
          <input type="hidden" value="Submit" />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { sendMessage },
    dispatch
  );
}

export default connect(mapDispatchToProps)(MessageForm);
