import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/UkCP3BjA0uZ8iOP3cEAi/books';
const GET_BOOK = 'GET_BOOK';
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const getData = createAsyncThunk(
  GET_BOOK, async () => axios.get(API_URL).then((response) => {
    const bookData = Object.keys(response.data).map((key) => ({
      id: key, ...response.data[key][0],
    }));
    return bookData;
  }),
);

const addData = createAsyncThunk(
  ADD_BOOK, async (book) => axios.post(API_URL, book).then(() => book),
);

const removeData = createAsyncThunk(
  REMOVE_BOOK, async (id) => axios.delete(`${API_URL}/${id}`, id).then(() => id),
);

const reducerBooks = (state = [], action) => {
  switch (action.type) {
    case `${GET_BOOK}/fulfilled`:
      return action.payload;
    case `${ADD_BOOK}/fulfilled`:
      return [
        ...state,
        action.payload,
      ];
    case `${REMOVE_BOOK}/fulfilled`:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export { addData, removeData, getData };
export default reducerBooks;
