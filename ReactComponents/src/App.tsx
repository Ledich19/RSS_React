import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './App.css';
import Collection from './components/Collection/Collection';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Collection />
    </div>
  );
}

export default App;
