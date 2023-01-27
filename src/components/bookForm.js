const BookForm = () => (
  <form>
    <hr />
    <h2>Add New Book</h2>
    <div className="row g-3">
      <div className="col">
        <input type="text" id="book-name" className="form-control" placeholder="Book Title" required />
      </div>
      <div className="col">
        <input type="text" id="book-author" className="form-control" placeholder="Book Author" required />
      </div>
      <div className="col">
        <button type="submit" className="btn btn-primary">Add Book</button>
      </div>
    </div>
  </form>
);

export default BookForm;
