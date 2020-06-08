import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions';
import CategoryFilter from './CategoryFilter';

const mapStateToProps = state => {
  const { books, filter } = state;
  return { books, filter };
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

const Component = ({ books, filter, removeBook }) => {
  const filteredBooks = () => {
    const booksInArray = booksCollection(books);
    if (filter === 'all') return booksInArray;
    return booksInArray.filter(book => book.category === filter);
  };
  return (
    <>
      <CategoryFilter />
      <table id="books-table" className="panel">
        <thead>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks().map(
            book => <Book key={book.id} book={book} removeBook={removeBook} />,
          )}
        </tbody>
      </table>
    </>
  );
};

Component.propTypes = {
  books: PropTypes.objectOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const BooksList = connect(mapStateToProps, mapDispatchToProps)(Component);

export default BooksList;
