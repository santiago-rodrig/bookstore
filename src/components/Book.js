import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <tr>
    <td>{book.id}</td>
    <td>{book.category}</td>
    <td>{book.title}</td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.exact({
    id: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default Book;
