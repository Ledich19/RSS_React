import React, { Component } from 'react';
import s from './Categories.module.scss';

export default class Categories extends Component {
  render() {
    return (
      <div className={s.categories}>
        {[
          'open Source',
          'mobile',
          'web',
          'software',
          'internet',
          'microsoft',
          'programming',
          'business',
          'Graph',
          'server',
        ].map((cat, i) => {
          return (
            <label key={i} className={s.label} htmlFor={cat}>
              <input id={cat} className={s.input} type="checkbox" />
              {cat}
            </label>
          );
        })}
      </div>
    );
  }
}
