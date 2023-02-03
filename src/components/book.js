import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeData } from '../redux/books/books';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();

  const onClick = (e) => {
    e.preventDefault();
    dispatch(removeData(id));
  };

  return (
    <>
      <hr />
      <div>
        <div>
          <h5>Science Fiction</h5>
          <h2>
            {title}
          </h2>
          <h2>
            {author}
          </h2>
          <ul>
            <button type="button">Comments</button>
            <button id={id} onClick={onClick} type="button">Remove</button>
            <button type="button">Edit</button>
          </ul>
        </div>

        <div>
          <h2>75%</h2>
          <p>Completed</p>
        </div>

        <div>
          <div>
            <h5>CURRENT CHAPTER</h5>
            <h3>Chapter 12: A New Arrival</h3>
            <button type="button">UPDATE PROGRESS</button>
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
  id: propTypes.string,
  title: propTypes.string,
  author: propTypes.string,
};

export default Book;
