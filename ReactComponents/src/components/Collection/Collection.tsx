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
type State = { books: InfoData[] };

export default class Collection extends Component {
  state: State = { books: books };

  render() {
    console.log(books);
    return (
      <div className={s.collection}>
        {this.state.books.map((book, i) => (
          <Card key={book.title + i} infoData={book} />
        ))}
      </div>
    );
  }
}
