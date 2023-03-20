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
  componentDidMount(): void {
    this.setState({ value: localStorage.getItem('searchString') || '' });
  }

  componentWillUnmount() {
    const { value } = this.state;
    localStorage.setItem('searchString', value);
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  };

  handleSearch = () => {
    const { setSearchState } = this.props;
    const { value } = this.state;
    setSearchState(value);
  };

  render() {
    const { value } = this.state;
    return (
      <SearchComponent
        value={value}
        handleInputChange={this.handleInputChange}
        handleSearch={this.handleSearch}
      />
    );
  }
}
