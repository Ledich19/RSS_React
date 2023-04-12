import CardNew from '../../components/CardNew/CardNew';
import s from './Collection.module.scss';
import NotifyComponent from '../../components/NotifyComponent/NotifyComponent';
import { Link, Outlet } from 'react-router-dom';
import { useAppSelector } from './../../app/hooks';
import { useGetBooksQuery } from './../../reducers/booksApi';
import { MagnifyingGlass } from 'react-loader-spinner';
import { GoogleBook } from './../../app/types';

const Collection = () => {
  const { search } = useAppSelector((store) => store.searchText);
  const { data, isLoading, isError } = useGetBooksQuery(search);
  const items: GoogleBook[] = data ? data.items : [];
  return (
    <div className={s.collection}>
      <Outlet />
      <MagnifyingGlass
        visible={isLoading}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translate(-50%, 0)',
        }}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
      {isError && (
        <NotifyComponent className={s.error} notifyMessage={{ text: 'net error', type: 'error' }} />
      )}
      {!items || items.length === 0 ? (
        <div>
          NO BOOKS...
          <div>
            Если вы видите это и ничего не происходит , возможно это потому что я использую API
            google books, а оно в некоторых странах не работает. И нужно воспользоваться VPN
          </div>
        </div>
      ) : (
        items.map((book) => (
          <Link key={book.id} to={`/app/${book.id}`}>
            <CardNew infoData={book} />
          </Link>
        ))
      )}
    </div>
  );
};

Collection.defaultProps = {
  books: [],
};

export default Collection;
