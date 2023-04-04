import axios from 'axios';
const KEY = 'AIzaSyARvebgjKS-EBwGQAKHefyRC3GXv5qvrOI';
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

const getAll = (search: string) => {
  const request = axios.get(`${BASE_URL}?q=${search}:keyes&maxResults=15&key=${KEY}`);
  return request.then((response) => response.data);
};

const getById = (id: string) => {
  const request = axios.get(`${BASE_URL}s/${id}?key=${KEY}y`);
  return request.then((response) => response.data);
};

const booksService = {
  getAll,
  getById,
};

export default booksService;
