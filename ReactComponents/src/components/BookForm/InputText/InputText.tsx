import React, { Component, RefObject } from 'react';
import s from './InputText.module.scss';

interface Props {
  label: string;
  name: string;
  required?: boolean;
  refLink: RefObject<HTMLInputElement>;
}

export default class InputText extends Component<Props> {
  render() {
    return (
      <label className={s.label} htmlFor="">
        {this.props.label} : {this.props.required && <span className={s.required}>*</span>}
        <input
          required={this.props.required}
          name={this.props.name}
          ref={this.props.refLink}
          className={s.input}
          type="text"
        />
      </label>
    );
  }
}
