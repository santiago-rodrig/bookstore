import React from 'react';

const Book = ({ book }) => {
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.category}</td>
      <td>{book.title}</td>
    </tr>
  );
};

export default Book;
