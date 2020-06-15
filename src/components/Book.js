import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => (
  <div className="book">
    <div className="book-details">
      <h3>{book.category}</h3>
      <h2>{book.title}</h2>
      <div className="book-author">suzane collins</div>
      <div className="book-actions">
        <button type="button">Comment</button>
        <button
          type="button"
          onClick={() => removeBook(book.id)}
        >
          Remove
        </button>
        <button type="button">Edit</button>
      </div>
    </div>
    <div className="book-progress">
      <div className="oval" />
      <div className="book-progress-details">
        <div>{`${Math.floor(Math.random() * 101)}%`}</div>
        <div>Completed</div>
      </div>
    </div>
    <div className="book-current-state">
      <h3>current chapter</h3>
      <div>Chapter 17</div>
      <button type="button">update progress</button>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.exact({
    id: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
