import { useState } from 'react';
import { InfoData } from 'app/types';
import BookForm from '../../components/BookForm/BookForm';
import NotifyComponent from '../../components/NotifyComponent/NotifyComponent';
import Card from './../../components/Card/Card';
import s from './AddBook.module.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addABookToFormBooks } from './../../reducers/formDataReducer';

interface NotifyMessage {
  type: string;
  text: string;
}

const AddBook = () => {
  const { formBooks } = useAppSelector((store) => store.booksForm);
  const dispatch = useAppDispatch();
  const [notifyMessage, setNotifyMessage] = useState<NotifyMessage>({ type: '', text: '' });

  const addBook = (newBook: InfoData) => {
    dispatch(addABookToFormBooks(newBook));
    setNotifyMessage({ type: 'success', text: 'book added' });
    setTimeout(() => {
      setNotifyMessage({ type: '', text: '' });
    }, 3000);
  };

  return (
    <>
      <BookForm addBook={addBook} />
      <NotifyComponent notifyMessage={notifyMessage} />
      <div className={s.collection}>
        {formBooks.map((book) => (
          <Card key={book.title} infoData={book} />
        ))}
      </div>
    </>
  );
};

export default AddBook;
