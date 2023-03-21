import React, { Component } from 'react';
import s from './TextareaComponent.module.scss';

interface Props {
  label: string;
  name: string;
  rows: number;
}

export default class TextareaComponent extends Component<Props> {
  render() {
    return (
      <label className={s.label} htmlFor="">
        {this.props.label} :
        <textarea rows={this.props.rows} name={this.props.name} className={s.textarea} />
      </label>
    );
  }
}
