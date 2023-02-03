import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addData } from '../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    const category = 'Science Fiction';
    const book = {
      title, author, item_id: uuidv4(), id: uuidv4(), category,
    };
    dispatch(addData(book));
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={onSubmit}>
      <hr />
      <h2>Add New Book</h2>
      <div className="row g-3">
        <div className="col">
          <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" id="book-name" placeholder="Book Title" required />
        </div>
        <div className="col">
          <input onChange={(e) => setAuthor(e.target.value)} value={author} type="text" id="book-author" placeholder="Book Author" required />
        </div>
        <div className="col">
          <button type="submit">ADD BOOK</button>
        </div>
      </div>
    </form>
  );
};

export default BookForm;
