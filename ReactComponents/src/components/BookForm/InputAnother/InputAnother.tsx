import React, { Component, RefObject } from 'react';
import s from './InputAnother.module.scss';

interface Props {
  label: string;
  type: string;
  name: string;
  required?: boolean;
  error?: string;
  refLink: RefObject<HTMLInputElement>;
}

export default class InputAnother extends Component<Props> {
  render() {
    return (
      <label className={s.label} htmlFor={this.props.label}>
        {this.props.error && <div className={s.error}>{this.props.error}</div>}
        <span>
          {this.props.label}:{this.props.required && <span className={s.required}>*</span>}
        </span>
        <input
          id={this.props.label}
          required={this.props.required}
          name={this.props.name}
          ref={this.props.refLink}
          className={s.input}
          type={this.props.type}
        />
      </label>
    );
  }
}
