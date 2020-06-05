import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions';

const mapStateToProps = state => {
  const { books } = state;
  return { books };
};

const booksCollection = books => {
  const result = [];
  Object.keys(books).forEach(k => {
    result.push({ id: k, ...books[k] });
  });
  return result;
};

const mapDispatchToProps = dispatch => ({
  removeBook: id => {
    dispatch(removeBook(id));
  },
});

const Component = ({ books, removeBook }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Category</th>
        <th>Title</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {booksCollection(books).map(
        book => <Book key={book.id} book={book} removeBook={removeBook} />,
      )}
    </tbody>
  </table>
);

Component.propTypes = {
  books: PropTypes.objectOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const BooksList = connect(mapStateToProps, mapDispatchToProps)(Component);

export default BooksList;
