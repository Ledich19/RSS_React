import { useState } from 'react';
import { Outlet, Routes, Route, Navigate } from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUs';
import Page404 from './pages/Page404/Page404';
import './App.css';
import Layout from './pages/Layout/Layout';
import Collection from './pages/Collection/Collection';
import booksDataNew from './data/booksDbNew.json';
import AddBook from './pages/AddBook/AddBook';
import { GoogleBook } from 'app/types';
import FullCard from './components/FullCard/FullCard';
import { BookDataContext } from './context';

const App = () => {
  const [islLoad, setIslLoad] = useState<boolean>(false);
  const [books, setBooks] = useState<GoogleBook[]>(booksDataNew.items);
  const [error, setError] = useState<string | null>(null);

  return (
    <BookDataContext.Provider value={{ setBooks, setError, setIslLoad }}>
      <div data-testid="App-testId" className="App">
        <Routes>
          <Route path="*" element={<Layout />}>
            <Route index element={<Navigate to="/app" />} />
            <Route
              path="app"
              element={<Collection error={error} books={books} islLoad={islLoad} />}
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
    </BookDataContext.Provider>
  );
};

export default App;
