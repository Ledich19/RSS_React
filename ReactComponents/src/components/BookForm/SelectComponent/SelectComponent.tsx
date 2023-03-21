import React, { Component, RefObject } from 'react';
import s from './SelectComponent.module.scss';

interface Props {
  name: string;
  refLink: RefObject<HTMLSelectElement>;
}

export default class SelectComponent extends Component<Props> {
  render() {
    return (
      <label className={s.label} htmlFor="">
        status :
        <select name={this.props.name} ref={this.props.refLink} id="">
          <option value="PUBLISH">PUBLISH</option>
          <option value="IN PROGRESS">PRE-ORDER</option>
          <option value="BACKORDER">BACKORDER</option>
          <option value="OUT OF STOCK">OUT OF STOCK</option>
          <option value="UNPUBLISHED">UNPUBLISHED</option>
        </select>
      </label>
    );
  }
}
