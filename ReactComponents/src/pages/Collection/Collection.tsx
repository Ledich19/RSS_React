import React, { useMemo } from 'react';
import { GoogleBook } from 'app/types';
import CardNew from '../../components/CardNew/CardNew';
import s from './Collection.module.scss';

interface Props {
  search: string;
  books: GoogleBook[];
}

const Collection = ({ search, books }: Props) => {
  // const filteredBooks = useMemo(() => {
  //   const filterBooks = (searchParameter: string) => {
  //     return books.filter((book) =>
  //       book.title.toUpperCase().includes(searchParameter.toUpperCase())
  //     );
  //   };
  //   return filterBooks(search);
  // }, [search, books]);
  console.log(books);

  return (
    <div className={s.collection}>
      {books.map((book) => (
        <CardNew key={book.id} infoData={book} />
      ))}
    </div>
  );
};

export default Collection;
