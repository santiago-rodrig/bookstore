import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const mapStateToProps = state => {
  const { books, filter } = state;

  return { books, filter };
};

const booksCollection = books => (
  Object.keys(books).map(k => ({ id: k, ...books[k] }))
);

const mapDispatchToProps = dispatch => ({
  removeBook: id => dispatch(removeBook(id)),
  changeFilter: filter => dispatch(changeFilter(filter)),
});

const Component = ({
  books,
  filter,
  removeBook,
  changeFilter,
}) => {
  const filteredBooks = () => {
    const booksInArray = booksCollection(books);

    if (filter === 'all') return booksInArray;

    return booksInArray.filter(book => book.category === filter);
  };

  const handleFilterChange = e => changeFilter(e.target.value);

  return (
    <>
      <CategoryFilter handleFilterChange={handleFilterChange} />
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
  changeFilter: PropTypes.func.isRequired,
};

const BooksList = connect(mapStateToProps, mapDispatchToProps)(Component);

export default BooksList;
