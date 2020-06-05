import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => (
  <tr>
    <td>{book.id}</td>
    <td>{book.category}</td>
    <td>{book.title}</td>
    <td>
      <button type="button" onClick={() => removeBook(book.id)}>
        Remove Book
      </button>
    </td>
  </tr>
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
