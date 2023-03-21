import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import s from './Collection.module.scss';
import booksData from '../../data/booksDb.json';
import { InfoData } from 'app/types';

interface State {
  books: InfoData[];
}
interface Props {
  search: string;
}
export default class Collection extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      books: booksData,
    };
  }

  filterBooks = (search: string) => {
    const { books } = this.state;
    return books.filter((book) => book.title.toUpperCase().includes(search.toUpperCase()));
  };

  render() {
    const { search } = this.props;
    const filteredBooks = this.filterBooks(search);

    return (
      <div className={s.collection}>
        {filteredBooks.map((book) => (
          <Card key={book.title} infoData={book} />
        ))}
      </div>
    );
  }
}
