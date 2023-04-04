import React, { useMemo } from 'react';
import { GoogleBook } from 'app/types';
import CardNew from '../../components/CardNew/CardNew';
import s from './Collection.module.scss';
import { MagnifyingGlass } from 'react-loader-spinner';

interface Props {
  search: string;
  books: GoogleBook[];
  islLoad: boolean;
}

const Collection = ({ search, books, islLoad }: Props) => {
  // const filteredBooks = useMemo(() => {
  //   const filterBooks = (searchParameter: string) => {
  //     return books.filter((book) =>
  //       book.title.toUpperCase().includes(searchParameter.toUpperCase())
  //     );
  //   };
  //   return filterBooks(search);
  // }, [search, books]);

  return (
    <div className={s.collection}>
      {islLoad ? (
        <MagnifyingGlass
          visible={islLoad}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      ) : (
        books.map((book) => <CardNew key={book.id} infoData={book} />)
      )}
    </div>
  );
};

export default Collection;
