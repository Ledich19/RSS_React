import React, { Component, RefObject } from 'react';
import s from './InputText.module.scss';

interface Props {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  refLink: RefObject<HTMLInputElement>;
}

export default class InputText extends Component<Props> {
  render() {
    const { label, error, required, name, refLink } = this.props;

    return (
      <label className={s.label} htmlFor={label}>
        {error && <div className={s.error}>{error}</div>}
        {label} : {required && <span className={s.required}>*</span>}
        <input id={label} name={name} ref={refLink} className={s.input} type="text" />
      </label>
    );
  }
}
