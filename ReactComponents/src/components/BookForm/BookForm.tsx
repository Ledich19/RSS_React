import React, { Component, createRef, RefObject } from 'react';
import s from './BookForm.module.scss';
import Categories from './Categories/Categories';
import DownloadImg from './DownloadImg/DownloadImg';
import InputAnother from './InputAnother/InputAnother';
import InputText from './InputText/InputText';
import SelectComponent from './SelectComponent/SelectComponent';
import TextareaComponent from './TextareaComponent/TextareaComponent';

export default class BookForm extends Component<object> {
  private titleRef: RefObject<HTMLInputElement>;
  private isbnRef: RefObject<HTMLInputElement>;
  private pageCountRef: RefObject<HTMLInputElement>;
  private authorsRef: RefObject<HTMLInputElement>;
  private publishedDateRef: RefObject<HTMLInputElement>;
  private checkboxRefs: RefObject<HTMLInputElement>[];
  private statusRef: RefObject<HTMLSelectElement>;
  private shortDescriptionRef: RefObject<HTMLTextAreaElement>;
  private longDescriptionRef: RefObject<HTMLTextAreaElement>;
  constructor(props: object) {
    super(props);

    this.titleRef = createRef();
    this.isbnRef = createRef();
    this.pageCountRef = createRef();
    this.authorsRef = createRef();
    this.shortDescriptionRef = createRef();
    this.longDescriptionRef = createRef();
    this.publishedDateRef = createRef();
    this.statusRef = createRef();
    this.checkboxRefs = Array(10)
      .fill('')
      .map(() => React.createRef());
  }

  handleAddBook = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(e.target.elements);
    const categoriesValues = this.checkboxRefs
      .filter((ref) => ref.current?.checked)
      .map((ref) => ref.current?.value);
    const newBook = {
      title: this.titleRef.current?.value || '',
      isbn: this.isbnRef.current?.value || '',
      pageCount: this.pageCountRef.current?.value || '',
      authors: this.authorsRef.current?.value || '',
      shortDescription: this.shortDescriptionRef.current?.value || '',
      longDescription: this.longDescriptionRef.current?.value || '',
      publishedDate: this.publishedDateRef.current?.value || '',
      status: this.statusRef.current?.value || '',
      categories: categoriesValues || '',
    };

    console.log(newBook);
    (e.target as HTMLFormElement).reset();
  };

  render() {
    return (
      <form onSubmit={this.handleAddBook} className={s.form}>
        <InputText refLink={this.titleRef} name="title" label="Title" />
        <InputText refLink={this.isbnRef} name="isbn" label="isbn" />
        <InputAnother
          refLink={this.pageCountRef}
          name="pageCount"
          label="pageCount"
          type="number"
        />
        <InputText refLink={this.authorsRef} name="authors" label="authors" />
        <TextareaComponent
          refLink={this.shortDescriptionRef}
          name="shortDescription"
          rows={3}
          label="shortDescription"
        />
        <TextareaComponent
          refLink={this.longDescriptionRef}
          name="longDescription"
          rows={5}
          label="longDescription"
        />
        <InputAnother
          refLink={this.publishedDateRef}
          name="publishedDate"
          label="publishedDate"
          type="date"
        />
        {/* <DownloadImg /> */}
        <SelectComponent refLink={this.statusRef} name="status" />
        <Categories refsLinks={this.checkboxRefs} name="categories" />
        <button type="submit">add book</button>
      </form>
    );
  }
}
