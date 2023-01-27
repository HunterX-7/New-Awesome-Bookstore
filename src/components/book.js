import React from 'react';
import propTypes from 'prop-types';

const Book = ({ books }) => {
  const { author, title } = books;

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h5 className="mr-3">Science Fiction</h5>
          <h2 className="mb-0">
            Title:
            {title}
          </h2>
          <h2 className="mb-0">
            Author:
            {author}
          </h2>
          <ul className="mb-0 p-0">
            <button type="button" className="btn btn-primary mx-1">Comments</button>
            <button type="button" className="btn btn-primary mx-1">Remove</button>
            <button type="button" className="btn btn-primary mx-1">Edit</button>
          </ul>
        </div>

        <div className="text-center mr-3">
          <h2>75%</h2>
          <p>Completed</p>
        </div>

        <div className="d-flex align-items-center">
          <div>
            <h5>Current Chapter</h5>
            <h3>Chapter 12: A New Arrival</h3>
            <button type="button" className="btn btn-primary">Update Progress</button>
          </div>
        </div>
      </div>
    </>
  );
};

Book.defaultProps = {
  books: '',
  author: '',
};

Book.propTypes = {
  books: propTypes.string,
  author: propTypes.string,
};

export default Book;
