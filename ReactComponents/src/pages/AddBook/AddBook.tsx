import React, { useState } from 'react';
import { InfoData } from 'app/types';
import Collection from '../Collection/Collection';
import BookForm from '../../components/BookForm/BookForm';
import NotifyComponent from '../../components/NotifyComponent/NotifyComponent';

interface NotifyMessage {
  type: string;
  text: string;
}

const AddBook = () => {
  const [books, setBooks] = useState<InfoData[]>([]);
  const [notifyMessage, setNotifyMessage] = useState<NotifyMessage>({ type: '', text: '' });

  const addBook = (newBook: InfoData) => {
    setBooks([...books, newBook]);
    setNotifyMessage({ type: 'success', text: 'book added' });
    setTimeout(() => {
      setNotifyMessage({ type: '', text: '' });
    }, 3000);
  };

  return (
    <>
      <BookForm addBook={addBook} />
      <NotifyComponent notifyMessage={notifyMessage} />
      <Collection books={books} search="" />
    </>
  );
};

export default AddBook;
