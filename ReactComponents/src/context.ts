import { GoogleBook } from './app/types';
import { createContext } from 'react';

export type GlobalContent = {
  setBooks: (value: GoogleBook[]) => void;
  setError: (value: string | null) => void;
  setIslLoad: (value: boolean) => void;
};

export const BookDataContext = createContext<GlobalContent>({
  setBooks: () => {},
  setError: () => {},
  setIslLoad: () => {},
});
