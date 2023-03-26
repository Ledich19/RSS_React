import React, { Component, RefObject } from 'react';
import s from './TextareaComponent.module.scss';

interface Props {
  label: string;
  name: string;
  rows: number;
  required?: boolean;
  error?: string;
  refLink: RefObject<HTMLTextAreaElement>;
}

export default class TextareaComponent extends Component<Props> {
  render() {
    const { label, error, required, rows, refLink, name } = this.props;

    return (
      <label className={s.label} htmlFor={label}>
        {error && <div className={s.error}>{error}</div>}
        {label} : {required && <span className={s.required}>*</span>}
        <textarea id={label} rows={rows} ref={refLink} name={name} className={s.textarea} />
      </label>
    );
  }
}
