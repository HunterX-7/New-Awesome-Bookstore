import { configureStore } from '@reduxjs/toolkit';
import reducerBooks from './books/books';
import reducerCategories from './categories/categories';

const rootReducer = {
  books: reducerBooks,
  categories: reducerCategories,
};

const reduxStore = configureStore({ reducer: rootReducer });

export default reduxStore;
