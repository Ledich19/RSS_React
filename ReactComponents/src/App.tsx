import AboutUs from './components/AboutUs/AboutUs';
import Page404 from './components/Page404';
import React, { Component } from 'react';
import { Outlet, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Collection from './components/Collection/Collection';

class App extends Component {
  state = {
    search: '',
  };
  setSearchState = (value: string) => {
    this.setState({ search: value });
  };

  render() {
    return (
      <div data-testid="App-testId" className="App">
        <Routes>
          <Route path="/" element={<Layout setSearchState={this.setSearchState} />}>
            <Route index element={<Collection search={this.state.search} />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
        <Outlet />
      </div>
    );
  }
}

export default App;
