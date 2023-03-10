
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { Outlet, Link } from "react-router-dom";
import './App.css';
import Search from './components/Search/Search';
import Collection from './components/Collection/Collection';

function App() {

  return (
    <div className="App">
      {/* <Search /> */}
      <Collection />
    </div>
  );
}

export default App;
