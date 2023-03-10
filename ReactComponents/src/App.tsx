
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { Outlet, Link } from "react-router-dom";
import './App.css';
import Search from './components/Search/Search';

function App() {

  return (
    <div className="App">
      <Search />

    </div>
  );
}

export default App;
