import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GoogleBook } from 'app/types';
const KEY = 'AIzaSyARvebgjKS-EBwGQAKHefyRC3GXv5qvrOI';

type Books = {
  items: GoogleBook[];
};

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.googleapis.com/books/v1/volumes' }),
  endpoints: (build) => ({
    getBooks: build.query<Books, string>({
      query: (search: string) => ({
        url: '',
        params: {
          q: `${search}:keyes`,
          maxResults: 15,
          key: KEY,
        },
      }),
    }),
    getBookById: build.query({
      query: (id) => `/${id}?key=${KEY}`,
    }),
  }),
});

export const { useGetBooksQuery, useGetBookByIdQuery } = booksApi;
