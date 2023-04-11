import { useState } from 'react';
import { Outlet, Routes, Route, Navigate } from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUs';
import Page404 from './pages/Page404/Page404';
import './App.css';
import Layout from './pages/Layout/Layout';
import Collection from './pages/Collection/Collection';
import AddBook from './pages/AddBook/AddBook';
import FullCard from './components/FullCard/FullCard';
import { BookDataContext } from './app/context';

const App = () => {
  const [islLoad, setIslLoad] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <div data-testid="App-testId" className="App">
      <BookDataContext.Provider value={{ setError, setIslLoad }}>
        <Routes>
          <Route path="*" element={<Layout islLoad={islLoad} />}>
            <Route index element={<Navigate to="/app" />} />
            <Route path="app" element={<Collection error={error} />}>
              <Route path={`:id`} element={<FullCard />} />
            </Route>
            <Route path="about" element={<AboutUs />} />
            <Route path="blank" element={<AddBook />} />
            <Route path="404" element={<Page404 />} />
            <Route path="*" element={<Navigate to="404" />} />
          </Route>
        </Routes>
        <Outlet />
      </BookDataContext.Provider>
    </div>
  );
};

export default App;
