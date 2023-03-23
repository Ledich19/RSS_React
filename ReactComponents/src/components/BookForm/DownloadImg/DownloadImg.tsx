import React, { Component, RefObject } from 'react';
import s from './DownloadImg.module.scss';

interface State {
  addImgWay: boolean;
}
interface Props {
  refLink: RefObject<HTMLInputElement>;
}

export default class DownloadImg extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      addImgWay: true,
    };
  }

  handleChoose = () => {
    this.setState({ addImgWay: !this.state.addImgWay });
  };

  render() {
    console.log(this.state.addImgWay);
    return (
      <div className={s.box}>
        <div className={s.radioBox}>
          <label className={s.label} htmlFor="">
            url :
            <input
              onChange={this.handleChoose}
              checked={this.state.addImgWay}
              className={s.input}
              name="download-img"
              type="radio"
            />
          </label>
          <label className={s.label} htmlFor="">
            file :
            <input
              onChange={this.handleChoose}
              checked={!this.state.addImgWay}
              className={s.input}
              name="download-img"
              type="radio"
            />
          </label>
        </div>
        <label className={s.label} htmlFor="">
          thumbnailUrl :
          {this.state.addImgWay ? (
            <input ref={this.props.refLink} className={s.input} type="text" />
          ) : (
            <input ref={this.props.refLink} className={s.input} type="file" />
          )}
        </label>
      </div>
    );
  }
}
