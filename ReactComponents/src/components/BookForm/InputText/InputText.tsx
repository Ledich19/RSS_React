import React, { Component } from 'react';
import s from './InputText.module.scss';

interface Props {
  label: string;
  type: string;
  name: string;
}

export default class InputText extends Component<Props> {
  render() {
    return (
      <label className={s.label} htmlFor="">
        {this.props.label} :
        <input name={this.props.name} className={s.input} type={this.props.type} />
      </label>
    );
  }
}
