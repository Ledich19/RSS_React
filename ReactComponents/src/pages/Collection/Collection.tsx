import React, { useMemo } from 'react';
import { GoogleBook } from 'app/types';
import CardNew from '../../components/CardNew/CardNew';
import s from './Collection.module.scss';
import { MagnifyingGlass } from 'react-loader-spinner';
import NotifyComponent from '../../components/NotifyComponent/NotifyComponent';
import { Link } from 'react-router-dom';

interface Props {
  search: string;
  books: GoogleBook[];
  islLoad: boolean;
  error: string | null;
}

const Collection = ({ search, books, islLoad, error }: Props) => {
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
      {error && (
        <NotifyComponent className={s.error} notifyMessage={{ text: error, type: 'error' }} />
      )}
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
        books.map((book) => (
          <Link key={book.id} to={`/app/${book.id}`}>
            <CardNew infoData={book} />
          </Link>
        ))
      )}
    </div>
  );
};

export default Collection;
