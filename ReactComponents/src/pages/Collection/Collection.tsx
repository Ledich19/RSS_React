import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import s from './Collection.module.scss';
import { InfoData } from 'app/types';

interface Props {
  search: string;
  books: InfoData[];
}
export default class Collection extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

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
