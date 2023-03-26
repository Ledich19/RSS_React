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
    const { error, options, name, refsLinks } = this.props;
    return (
      <div data-testid="category-checkboxes" className={s.categories}>
        {error && <div className={s.error}>{error}</div>}
        {options.map((cat, i) => {
          return (
            <label key={i} className={s.label} htmlFor={cat}>
              <input
                name={name}
                id={cat}
                ref={refsLinks[i]}
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
