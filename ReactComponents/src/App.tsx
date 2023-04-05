import { useEffect, useState } from 'react';
import { Outlet, Routes, Route, Navigate } from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUs';
import Page404 from './pages/Page404/Page404';
import './App.css';
import Layout from './pages/Layout/Layout';
import Collection from './pages/Collection/Collection';
import booksDataNew from './data/booksDbNew.json';
import AddBook from './pages/AddBook/AddBook';
import booksService from './services/books';
import { GoogleBook } from 'app/types';
import FullCard from './components/FullCard/FullCard';

const App = () => {
  const [search, setSearch] = useState('');
  const [islLoad, setIslLoad] = useState<boolean>(false);
  const [books, setBooks] = useState<GoogleBook[]>(booksDataNew.items);
  const [error, setError] = useState<string | null>(null);
  const [totalItems, setTotalItems] = useState<number>(booksDataNew.totalItems);

  const setSearchState = (value: string) => {
    setSearch(value);
  };

  useEffect(() => {
    (async () => {
      try {
        setIslLoad(true);
        const data = await booksService.getAll(search);
        setBooks(data.items);
        setTotalItems(booksDataNew.totalItems);
        setError(null);
        setIslLoad(false);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error);
          setError(error.message);
        } else {
          setError(`Unknown error occurred: ${error}`);
        }
      }
    })();
  }, [search]);

  return (
    <div data-testid="App-testId" className="App">
      <Routes>
        <Route path="*" element={<Layout setSearchState={setSearchState} />}>
          <Route index element={<Navigate to="/app" />} />
          <Route
            path="app"
            element={<Collection error={error} books={books} search={search} islLoad={islLoad} />}
          >
            <Route path={`:id`} element={<FullCard />} />
          </Route>
          <Route path="about" element={<AboutUs />} />
          <Route path="blank" element={<AddBook />} />
          <Route path="404" element={<Page404 />} />
          <Route path="*" element={<Navigate to="404" />} />
        </Route>
      </Routes>
      <Outlet />
    </div>
  );
};

export default App;
