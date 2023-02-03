import { Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import './App.css';
import { FaUserAlt } from 'react-icons/fa';
import Books from './pages/bookPage';
import Categories from './pages/categoryPage';
import { useDispatch } from 'react-redux';
import { getData } from './redux/books/books';

const App = () => {
  const dispatch = useDispatch();
  dispatch(getData());
  return (
    <>
      <nav className="navbar navbar-dark bg-primary navbar-expand">
        <div className="container">
          <Link className="navbar-brand" to="./">New Awesome Bookstore</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="./">Books</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categoryPage">Categories</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-text">
            <ul className="navbar-nav">
              <li className="nav-item">
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
  )
};

export default App;
