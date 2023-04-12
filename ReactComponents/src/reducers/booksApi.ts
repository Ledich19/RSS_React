import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const KEY = 'AIzaSyARvebgjKS-EBwGQAKHefyRC3GXv5qvrOI';

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.googleapis.com/books/v1/volumes' }),
  endpoints: (build) => ({
    getBooks: build.query({
      query: (search) => `?q=${search ? search : ''}:keyes&maxResults=15&key=${KEY}`,
    }),
    getBookById: build.query({
      query: (id) => `/${id}?key=${KEY}`,
    }),
  }),
});

export const { useGetBooksQuery, useGetBookByIdQuery } = booksApi;
