import React, { Component } from 'react';
import s from './SelectComponent.module.scss';

export default class SelectComponent extends Component {
  render() {
    return (
      <label className={s.label} htmlFor="">
        status :
        <select name="categories" id="">
          status :<option value="PUBLISH">PUBLISH</option>
          <option value="IN PROGRESS">PRE-ORDER</option>
          <option value="BACKORDER">BACKORDER</option>
          <option value="OUT OF STOCK">OUT OF STOCK</option>
          <option value="UNPUBLISHED">UNPUBLISHED</option>
        </select>
      </label>
    );
  }
}
