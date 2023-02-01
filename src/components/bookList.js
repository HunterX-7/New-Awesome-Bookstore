import React from 'react';
import { useSelector } from 'react-redux';
import BookForm from './bookForm';
import Book from './book';

const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      { books.map((book) => (
        <Book key={book.id} id={book.id} author={book.author} title={book.title} />
      ))}
      <BookForm />
    </div>
  );
};

export default BookList;
