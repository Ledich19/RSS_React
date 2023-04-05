import { GoogleBook } from 'app/types';
import CardNew from '../../components/CardNew/CardNew';
import s from './Collection.module.scss';
import { MagnifyingGlass } from 'react-loader-spinner';
import NotifyComponent from '../../components/NotifyComponent/NotifyComponent';
import { Link, Outlet } from 'react-router-dom';

interface Props {
  books: GoogleBook[];
  islLoad: boolean;
  error: string | null;
}

const Collection = ({ books, islLoad, error }: Props) => {
  return (
    <div className={s.collection}>
      <Outlet />
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

Collection.defaultProps = {
  books: [],
};

export default Collection;
