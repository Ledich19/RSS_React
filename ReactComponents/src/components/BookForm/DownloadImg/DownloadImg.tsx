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
      <div data-testid="download-img-container" className={s.box}>
        <div className={s.radioBox}>
          <label className={s.label} htmlFor="choose-url-img">
            url :
            <input
              id="choose-url-img"
              onChange={this.handleChoose}
              checked={this.state.addImgWay}
              className={s.input}
              name="download-img"
              type="radio"
            />
          </label>
          <label className={s.label} htmlFor="choose-file-img">
            file :
            <input
              id="choose-file-img"
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
