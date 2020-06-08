import React from 'react';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import Header from './Header';

function App() {
  return (
    <div id="content">
      <Header title="Bookstore CMS" color="#0290ff" />
      <div className="panel-bg">
        <BooksList />
        <BooksForm />
      </div>
    </div>
  );
}

export default App;
