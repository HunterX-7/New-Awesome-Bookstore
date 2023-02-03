import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { RxDividerVertical } from 'react-icons/rx';
import { removeData } from '../redux/books/books';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();

  const onClick = (e) => {
    e.preventDefault();
    dispatch(removeData(id));
  };

  const percent = Math.floor((Math.random() * 100) + 1);

  return (
    <>
      <hr />
      <div className="row align-items-center">
        <div className="col-5">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5 className="mr-3 text-secondary">Science Fiction</h5>
              <h2 className="mb-0">
                {title}
              </h2>
              <h2 className="text-secondary weight-300 mb-0">
                {author}
              </h2>
              <ul className="mb-0 p-0 mt-2">
                <a href="/" className="link-secondary underline mx-0 weight-300">Comments</a>
                <RxDividerVertical className="react-icons" />
                <a href="/" id={id} onClick={onClick} className="link-secondary underline mx-0 weight-300">Remove</a>
                <RxDividerVertical className="react-icons" />
                <a href="/" className="link-secondary underline mx-0 weight-300">Edit</a>
              </ul>
            </div>

          </div>
        </div>
        <div className="col-7">
          <div className="d-flex justify-content-between align-items-center">

            <div className="circular-progress" />

            <div className="text-center mr-3">
              <h2>
                {percent}
                %
              </h2>
              <p className="text-secondary">Completed</p>
            </div>

            <div className="progress-divider" />

            <div className="d-flex align-items-center">
              <div>
                <h5 className="text-secondary weight-300">CURRENT CHAPTER</h5>
                <h3 className="weight-300">Chapter 12: A New Arrival</h3>
                <button type="button" className="btn btn-primary weight-300">UPDATE PROGRESS</button>
              </div>
            </div>
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
