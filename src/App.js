import { Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import './App.css';
import { FaUserAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import Books from './pages/bookPage';
import Categories from './pages/categoryPage';
import { getData } from './redux/books/books';

const App = () => {
  const dispatch = useDispatch();
  dispatch(getData());
  return (
    <>
      <nav>
        <div>
          <Link to="./">New Awesome Bookstore</Link>
          <div>
            <ul>
              <li>
                <Link to="./">Books</Link>
              </li>
              <li>
                <Link to="/categoryPage">Categories</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <FaUserAlt />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categoryPage" element={<Categories />} />
      </Routes>
    </>
  );
};

export default App;
