import Card from '../Card/Card';
import React, { Component } from 'react';
import s from './Collection.module.css';
import books from '../../data/books.json';

interface InfoData {
  title: string;
  isbn?: string;
  pageCount: number;
  publishedDate: { $date: string };
  thumbnailUrl?: string;
  shortDescription?: string;
  longDescription?: string;
  status: string;
  authors: string[];
  categories: string[];
}
interface State {
  books: InfoData[];
}
interface Props {
  search: string;
}
export default class Collection extends Component<Props, State> {
  state: State = {
    books,
  };

  filterBooks = (books: InfoData[], search: string) => {
    return books.filter((book) => book.title.toUpperCase().includes(search.toUpperCase()));
  };

  render() {
    const { search } = this.props;
    const { books } = this.state;
    const filteredBooks = this.filterBooks(books, search);

    return (
      <div className={s.collection}>
        {filteredBooks.map((book, i) => (
          <Card key={book.title + i} infoData={book} />
        ))}
      </div>
    );
  }
}
