import Collection from '../../pages/Collection/Collection';
import React, { Component } from 'react';
import { InfoData } from 'app/types';
import BookForm from '../../components/BookForm/BookForm';
import NotifyComponent from '../../components/NotifyComponent/NotifyComponent';

interface State {
  books: InfoData[];
  notifyMessage: {
    type: string;
    text: string;
  };
}

export default class AddBook extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      books: [],
      notifyMessage: {
        type: '',
        text: '',
      },
    };
  }

  addBook = (newBook: InfoData) => {
    this.setState({ books: this.state.books.concat(newBook) });
    this.setState({ notifyMessage: { type: 'success', text: 'book added' } });
    setTimeout(() => {
      this.setState({ notifyMessage: { type: '', text: '' } });
    }, 3000);
  };

  render() {
    return (
      <>
        <BookForm addBook={this.addBook} />
        <NotifyComponent notifyMessage={this.state.notifyMessage} />
        <Collection books={this.state.books} search="" />
      </>
    );
  }
}
