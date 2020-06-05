import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

const mapStateToProps = (state) => {
  const { books } = state;
  return { books };
};

const booksCollection = (books) => {
  const result = [];
  Object.keys(books).forEach(k => {
    result.push({ id: k, ...books[k] });
  });
  return result;
};

let BooksList = ({ books }) => {
  return (
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
};

BooksList = connect(mapStateToProps, null)(BooksList);

export default BooksList;
