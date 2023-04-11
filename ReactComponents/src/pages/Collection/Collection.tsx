import { GoogleBook } from 'app/types';
import CardNew from '../../components/CardNew/CardNew';
import s from './Collection.module.scss';
import NotifyComponent from '../../components/NotifyComponent/NotifyComponent';
import { Link, Outlet } from 'react-router-dom';

interface Props {
  books: GoogleBook[] | null;
  error: string | null;
}

const Collection = ({ books, error }: Props) => {
  return (
    <div className={s.collection}>
      <Outlet />
      {error && (
        <NotifyComponent className={s.error} notifyMessage={{ text: error, type: 'error' }} />
      )}
      {!books || books.length === 0 ? (
        <div>
          NO BOOKS...
          <div>
            Если вы видите это и ничего не происходит , возможно это потому что я использую API
            google books а оно в некоторых странах не работает. И нужно воспользоваться VPN
          </div>
        </div>
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
