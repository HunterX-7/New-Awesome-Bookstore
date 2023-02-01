import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();

  const onClick = (e) => {
    e.preventDefault();
    dispatch(removeBook(parseInt(e.target.id, 10)));
  };

  return (
    <>
      <hr />
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h5 className="mr-3 text-secondary">Science Fiction</h5>
          <h2 className="mb-0">
            {title}
          </h2>
          <h2 className="weight-300 mb-0">
            {author}
          </h2>
          <ul className="mb-0 p-0 mt-2">
            <button type="button" className="btn btn-outline-primary btn-sm mx-0">Comments</button>
            <button id={id} onClick={onClick} type="button" className="btn btn-outline-primary btn-sm mx-2">Remove</button>
            <button type="button" className="btn btn-outline-primary btn-sm mx-0">Edit</button>
          </ul>
        </div>

        <div className="text-center mr-3">
          <h2>75%</h2>
          <p className="text-secondary">Completed</p>
        </div>

        <div className="d-flex align-items-center">
          <div>
            <h5 className="text-secondary weight-300">CURRENT CHAPTER</h5>
            <h3 className="weight-300">Chapter 12: A New Arrival</h3>
            <button type="button" className="btn btn-primary">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    </>
  );
};

Book.defaultProps = {
  id: '',
  title: '',
  author: '',
};

Book.propTypes = {
  id: propTypes.number,
  title: propTypes.string,
  author: propTypes.string,
};

export default Book;
