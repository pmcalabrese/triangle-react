import React, { Component } from "react";

export class Message extends Component {
  render() {
    const { message, message_type = 'info', title } = this.props;
    return (<React.Fragment>
      <dl className={`ts-${message_type}`}>
        <dt>{title}</dt>
        <dd>
          {message}
        </dd>
      </dl>
    </React.Fragment>);
  }
}

export default Message;