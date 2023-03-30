import React, { useMemo } from 'react';
import { InfoData } from 'app/types';
import Card from '../../components/Card/Card';
import s from './Collection.module.scss';

interface Props {
  search: string;
  books: InfoData[];
}

const Collection = ({ search, books }: Props) => {
  const filteredBooks = useMemo(() => {
    const filterBooks = (searchParameter: string) => {
      return books.filter((book) =>
        book.title.toUpperCase().includes(searchParameter.toUpperCase())
      );
    };
    return filterBooks(search);
  }, [search, books]);

  return (
    <div className={s.collection}>
      {filteredBooks.map((book) => (
        <Card key={book.title} infoData={book} />
      ))}
    </div>
  );
};

export default Collection;
