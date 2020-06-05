import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const mapStateToProps = state => {
  const { books } = state;
  return { books };
};

const booksCollection = books => {
  const result = [];
  Object.keys(books).forEach(k => {
    result.push({ id: parseInt(k, 10), ...books[k] });
  });
  return result;
};

const Component = ({ books }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Category</th>
        <th>Title</th>
      </tr>
    </thead>
    <tbody>
      {booksCollection(books).map(book => <Book key={book.id} book={book} />)}
    </tbody>
  </table>
);

Component.propTypes = {
  books: PropTypes.objectOf(PropTypes.object).isRequired,
};

const BooksList = connect(mapStateToProps, null)(Component);

export default BooksList;
