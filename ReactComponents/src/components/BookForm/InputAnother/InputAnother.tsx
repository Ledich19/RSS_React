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
    const { label, error, required, name, type, refLink } = this.props;
    return (
      <label className={s.label} htmlFor={label}>
        {error && <div className={s.error}>{error}</div>}
        <span>
          {label}:{required && <span className={s.required}>*</span>}
        </span>
        <input id={label} name={name} ref={refLink} className={s.input} type={type} />
      </label>
    );
  }
}
