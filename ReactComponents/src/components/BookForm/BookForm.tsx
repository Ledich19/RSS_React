import React, { Component } from 'react';
import s from './BookForm.module.scss';
import Categories from './Categories/Categories';
import DownloadImg from './DownloadImg/DownloadImg';
import InputAnother from './InputAnother/InputAnother';
import InputText from './InputText/InputText';
import SelectComponent from './SelectComponent/SelectComponent';
import TextareaComponent from './TextareaComponent/TextareaComponent';

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
        <InputText label="Title" name="title" type="text" />
        <InputText label="isbn" name="isbn" type="text" />
        <InputAnother label="pageCount" name="pageCount" type="number" />
        <InputText label="authors" name="authors" type="text" />
        <TextareaComponent rows={3} label="shortDescription" name="shortDescription" />
        <TextareaComponent rows={5} label="longDescription" name="longDescription" />
        <InputAnother label="publishedDate" name="publishedDate" type="date" />
        <DownloadImg />
        <SelectComponent />
        <Categories />
      </form>
    );
  }
}
