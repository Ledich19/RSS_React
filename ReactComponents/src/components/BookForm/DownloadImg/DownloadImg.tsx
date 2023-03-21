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
