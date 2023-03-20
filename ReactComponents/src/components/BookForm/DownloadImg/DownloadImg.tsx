import React, { Component } from 'react';
import s from './DownloadImg.module.scss';

// export type InfoData = {
//   title: string;
//   isbn?: string;
//   pageCount: number;
//   publishedDate: { $date: string };
//   thumbnailUrl?: string;
//   shortDescription?: string;
//   longDescription?: string;
//   status: string;
//   authors: string[];
//   categories: string[];
// };
interface State {
  addImgWay: boolean;
}

export default class DownloadImg extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      addImgWay: true,
    };
  }

  handleChoose = () => {
    this.setState({ addImgWay: !this.state.addImgWay });
  };

  render() {
    return (
      <div className={s.box}>
        <div className={s.radioBox}>
          <label onChange={this.handleChoose} className={s.label} htmlFor="">
            url :
            <input defaultChecked className={s.input} name="download-img" type="radio" />
          </label>
          <label onChange={this.handleChoose} className={s.label} htmlFor="">
            file :
            <input className={s.input} name="download-img" type="radio" />
          </label>
        </div>
        {this.state.addImgWay ? (
          <label className={s.label} htmlFor="">
            thumbnailUrl :
            <input className={s.input} type="text" />
          </label>
        ) : (
          <label className={s.label} htmlFor="">
            thumbnailDownload :
            <input className={s.input} type="file" />
          </label>
        )}
      </div>
    );
  }
}
