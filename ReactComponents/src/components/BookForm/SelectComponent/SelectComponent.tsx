import React, { Component, RefObject } from 'react';
import s from './SelectComponent.module.scss';

interface Props {
  name: string;
  options: string[];
  label: string;
  refLink: RefObject<HTMLSelectElement>;
}

export default class SelectComponent extends Component<Props> {
  render() {
    const { label, name, options, refLink } = this.props;

    return (
      <label className={s.label} htmlFor={label}>
        {label}
        <select data-testid="SelectComponent-testId" id={label} name={name} ref={refLink}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    );
  }
}
