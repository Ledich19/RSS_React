import React, { Component } from 'react';
import s from './BookForm.module.scss';
import DownloadImg from './DownloadImg/DownloadImg';

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
              <label key={i} className={s.label} htmlFor="">
                {cat}
                <input className={s.input} type="checkbox" />
              </label>
            );
          })}
        </div>
      </form>
    );
  }
}
