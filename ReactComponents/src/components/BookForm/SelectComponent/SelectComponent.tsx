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
      <label className={s.label} htmlFor="">
        status :
        <select name={this.props.name} ref={this.props.refLink} id="">
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
