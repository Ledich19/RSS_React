import React, { Component, RefObject } from 'react';
import s from './TextareaComponent.module.scss';

interface Props {
  label: string;
  name: string;
  rows: number;
  refLink: RefObject<HTMLTextAreaElement>;
}

export default class TextareaComponent extends Component<Props> {
  render() {
    return (
      <label className={s.label} htmlFor="">
        {this.props.label} :
        <textarea
          rows={this.props.rows}
          ref={this.props.refLink}
          name={this.props.name}
          className={s.textarea}
        />
      </label>
    );
  }
}
