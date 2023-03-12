import AboutUs from './components/AboutUs';
import Page404 from './components/Page404';
import React, { Component } from 'react';
import { Outlet, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Collection from './components/Collection/Collection';
import Header from './components/Header/Header';

class App extends Component {
  state = {
    search: '',
  };
  setSearchState = (value: string) => {
    this.setState({ search: value });
    console.log(value, this.state);
  };

  render() {
    return (
      <div data-testid="App-testId" className="App">
        <Header setSearchState={this.setSearchState} />
        <Routes>
          <Route path="/" element={<Collection search={this.state.search} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Outlet />
      </div>
    );
  }
}

export default App;
