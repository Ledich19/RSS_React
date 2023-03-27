import './NotifyComponent.scss';
import React, { Component } from 'react';
import { FaExclamationTriangle, FaCheckCircle, FaInfoCircle } from 'react-icons/fa';

interface Props {
  className?: string;
  notifyMessage: {
    text: string;
    type: string;
  };
}

class NotifyComponent extends Component<Props> {
  render() {
    const { className, notifyMessage } = this.props;

    if (!notifyMessage || !this.props.notifyMessage.text) {
      return null;
    }

    return (
      <div className={`notify notify-${notifyMessage.type} ${className}`}>
        <i className={`notify__triangle notify-${notifyMessage.text}`}>
          {notifyMessage.type !== 'error' || <FaExclamationTriangle />}
          {notifyMessage.type !== 'success' || <FaCheckCircle />}
          {notifyMessage.type !== 'info' || <FaInfoCircle />}
          {notifyMessage.type !== 'warning' || <FaExclamationTriangle />}
        </i>
        <div className={`notify__text notify-${notifyMessage.type}`}>
          <span>{notifyMessage.text}</span>
        </div>
      </div>
    );
  }
}

export default NotifyComponent;