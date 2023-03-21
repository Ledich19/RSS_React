import React, { Component } from 'react';
import s from './BookForm.module.scss';
import Categories from './Categories/Categories';
import DownloadImg from './DownloadImg/DownloadImg';
import SelectComponent from './SelectComponent/SelectComponent';

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

export default class BookForm extends Component {
  render() {
    return (
      <form className={s.form}>
        <label className={s.label} htmlFor="">
          name :
          <input className={s.input} type="text" />
        </label>
        <label className={s.label} htmlFor="">
          isbn :
          <input className={s.input} type="text" />
        </label>
        <label className={s.label} htmlFor="">
          pageCount :
          <input className={s.pageCount} type="number" />
        </label>
        <label className={s.label} htmlFor="">
          authors :
          <input className={s.input} type="text" />
        </label>
        <label className={s.label} htmlFor="">
          shortDescription :
          <input className={s.input} type="text" />
        </label>
        <label className={s.label} htmlFor="">
          longDescription :
          <input className={s.input} type="text" />
        </label>

        <label className={s.label} htmlFor="">
          publishedDate :
          <input className={s.inputDate} type="date" />
        </label>

        <DownloadImg />
        <SelectComponent />
        <Categories />
      </form>
    );
  }
}
