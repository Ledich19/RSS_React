import React, { Component, RefObject } from 'react';
import s from './SelectComponent.module.scss';

interface Props {
  name: string;
  options: string[];
  refLink: RefObject<HTMLSelectElement>;
}

export default class SelectComponent extends Component<Props> {
  render() {
    return (
      <label className={s.label} htmlFor={this.props.name}>
        status :
        <select id={this.props.name} name={this.props.name} ref={this.props.refLink}>
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
