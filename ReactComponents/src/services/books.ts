import axios from 'axios';
const KEY = 'AIzaSyARvebgjKS-EBwGQAKHefyRC3GXv5qvrOI';
const BASE_URL = 'https://www.googleapis.com/books';

const getAll = (search: string) => {
  const request = axios.get(`${BASE_URL}/v1/volumes?q=${search}:keyes&key=${KEY}`);
  return request.then((response) => response.data);
};

const companionService = {
  getAll,
};

export default companionService;
