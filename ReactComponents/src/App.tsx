import React, { Component } from 'react';
import { Outlet, Routes, Route, Navigate } from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUs';
import Page404 from './pages/Page404/Page404';
import './App.css';
import Layout from './pages/Layout/Layout';
import Collection from './pages/Collection/Collection';

interface AppState {
  search: string;
}

class App extends Component<object, AppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      search: '',
    };
  }

  setSearchState = (value: string) => {
    this.setState({ search: value });
  };

  render() {
    const { search } = this.state;
    return (
      <div data-testid="App-testId" className="App">
        <Routes>
          <Route path="/" element={<Layout setSearchState={this.setSearchState} />}>
            <Route index element={<Navigate to="/app" />} />
            <Route path="app" element={<Collection search={search} />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="404" element={<Page404 />} />
            <Route path="*" element={<Navigate to="404" />} />
          </Route>
        </Routes>
        <Outlet />
      </div>
    );
  }
}

export default App;
