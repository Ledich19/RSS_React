import React, { Component } from 'react';
import s from './AboutUs.module.scss';

export default class AboutUs extends Component {
  render(): React.ReactNode {
    return (
      <div className={s.aboutUs}>
        <h1>About Us</h1>
        <p>AboutUs AboutUs AboutUs</p>
      </div>
    );
  }
}
