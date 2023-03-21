import Collection from '../../pages/Collection/Collection';
import React, { Component } from 'react';
import s from './AddBook.module.scss';
import { InfoData } from 'app/types';
import BookForm from '../../components/BookForm/BookForm';

interface State {
  books: InfoData[];
}

export default class AddBook extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      books: [],
    };
  }

  addBook = (newBook: InfoData) => {
    this.setState({ books: this.state.books.concat(newBook) });
  };

  render() {
    return (
      <>
        <BookForm addBook={this.addBook} />
        <Collection books={this.state.books} search="" />
      </>
    );
  }
}
