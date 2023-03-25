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
    return (
      <label className={s.label} htmlFor={this.props.label}>
        {this.props.label}
        <select
          data-testid={'SelectComponent-testId'}
          id={this.props.label}
          name={this.props.name}
          ref={this.props.refLink}
        >
          {this.props.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    );
  }
}
