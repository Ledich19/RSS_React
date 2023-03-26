import React, { Component } from 'react';
import { InfoData } from 'app/types';
import Card from '../../components/Card/Card';
import s from './Collection.module.scss';

interface Props {
  search: string;
  books: InfoData[];
}
export default class Collection extends Component<Props> {
  filterBooks = (search: string) => {
    const { books } = this.props;
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
