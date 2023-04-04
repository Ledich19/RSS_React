import { useEffect, useState } from 'react';
import { Outlet, Routes, Route, Navigate } from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUs';
import Page404 from './pages/Page404/Page404';
import './App.css';
import Layout from './pages/Layout/Layout';
import Collection from './pages/Collection/Collection';
import booksData from './data/booksDb.json';
import booksDataNew from './data/booksDbNew.json';
import AddBook from './pages/AddBook/AddBook';
import booksService from './services/books';

const App = () => {
  const [search, setSearch] = useState('');
  const [islLoad, setIslLoad] = useState(false);
  const [books, setBooks] = useState(booksDataNew.items);

  const setSearchState = (value: string) => {
    setSearch(value);
  };

  useEffect(() => {
    (async () => {
      setIslLoad(true);
      const data = await booksService.getAll(search);
      setBooks(data.items);
      setIslLoad(false);
    })();
  }, [search]);

  return (
    <div data-testid="App-testId" className="App">
      <Routes>
        <Route path="*" element={<Layout setSearchState={setSearchState} />}>
          <Route index element={<Navigate to="/app" />} />
          <Route
            path="app"
            element={<Collection books={books} search={search} islLoad={islLoad} />}
          />
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
