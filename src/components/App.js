import React from 'react';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import Header from './Header';

function App() {
  return (
    <>
      <Header title="Bookstore CMS" color="#0290ff" />
      <BooksList />
      <BooksForm />
    </>
  );
}

export default App;
