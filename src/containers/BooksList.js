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
  removeBook: id => {
    dispatch(removeBook(id));
  },
  changeFilter: filter => {
    dispatch(changeFilter(filter));
  },
});

const Component = ({
  books,
  filter,
  removeBook,
  changeFilter,
}) => {
  const handleFilterChange = e => changeFilter(e.target.value);

  const filteredBooks = () => {
    const booksInArray = booksCollection(books);

    if (filter === 'all') return booksInArray;

    return booksInArray.filter(book => book.category === filter);
  };

  return (
    <>
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <div id="books">
        {filteredBooks().map(
          book => <Book key={book.id} book={book} removeBook={removeBook} />,
        )}
      </div>
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
