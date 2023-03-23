import React, { Component, RefObject } from 'react';
import s from './Categories.module.scss';

interface Props {
  name: string;
  error?: string;
  options: string[];
  refsLinks: RefObject<HTMLInputElement>[];
}

export default class Categories extends Component<Props> {
  render() {
    return (
      <div className={s.categories}>
        {this.props.error && <div className={s.error}>{this.props.error}</div>}
        {this.props.options.map((cat, i) => {
          return (
            <label key={i} className={s.label} htmlFor={cat}>
              <input
                name={this.props.name}
                id={cat}
                ref={this.props.refsLinks[i]}
                className={s.input}
                type="checkbox"
                value={cat}
              />
              {cat}
            </label>
          );
        })}
      </div>
    );
  }
}
