import React, { Component } from 'react';
import { InfoData } from 'app/types';
import Collection from '../Collection/Collection';
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
    const { books } = this.state;
    this.setState({ books: books.concat(newBook) });
    this.setState({ notifyMessage: { type: 'success', text: 'book added' } });
    setTimeout(() => {
      this.setState({ notifyMessage: { type: '', text: '' } });
    }, 3000);
  };

  render() {
    const { notifyMessage, books } = this.state;
    return (
      <>
        <BookForm addBook={this.addBook} />
        <NotifyComponent notifyMessage={notifyMessage} />
        <Collection books={books} search="" />
      </>
    );
  }
}
