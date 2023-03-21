import React, { Component, RefObject } from 'react';
import s from './InputAnother.module.scss';

interface Props {
  label: string;
  type: string;
  name: string;
  refLink: RefObject<HTMLInputElement>;
}

export default class InputAnother extends Component<Props> {
  render() {
    return (
      <label className={s.label} htmlFor="">
        {this.props.label} :
        <input
          name={this.props.name}
          ref={this.props.refLink}
          className={s.input}
          type={this.props.type}
        />
      </label>
    );
  }
}
