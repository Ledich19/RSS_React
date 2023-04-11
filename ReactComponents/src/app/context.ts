import { createContext } from 'react';

export type GlobalContent = {
  setError: (value: string | null) => void;
  setIslLoad: (value: boolean) => void;
};

export const BookDataContext = createContext<GlobalContent>({
  setError: () => {},
  setIslLoad: () => {},
});
