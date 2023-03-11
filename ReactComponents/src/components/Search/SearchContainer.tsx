import React, { Component } from 'react';
import SearchComponent from './SearchComponent';

interface Props {
  setSearchState: (value: string) => void;
}

interface State {
  value: string;
}

export default class SearchContainer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: localStorage.getItem('searchString') || '',
    };
  }

  componentWillUnmount() {
    const { value } = this.state;
    console.log(`Value "${value}" was saved to LocalStorage for component `);
    localStorage.setItem('searchString', value);
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  };

  handleSearch = () => {
    this.props.setSearchState(this.state.value);
  };

  render() {
    return (
      <SearchComponent
        value={this.state.value}
        handleInputChange={this.handleInputChange}
        handleSearch={this.handleSearch}
      />
    );
  }
}
