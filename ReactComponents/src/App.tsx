import React, { Component } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './App.css';
import Collection from './components/Collection/Collection';
import Header from './components/Header/Header';

class App extends Component<{ search: string }> {
  state = {
    search: '',
  };
  setSearchState = (value: string) => {
    this.setState({ search: value });
    console.log(value, this.state);
  };

  render() {
    return (
      <div className="App">
        <Header setSearchState={this.setSearchState} />
        <Outlet />
        <Collection search={this.state.search} />
      </div>
    );
  }
}

export default App;
