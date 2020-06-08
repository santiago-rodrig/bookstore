import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addBook } from '../actions';

const categories = [
  'action',
  'biography',
  'history',
  'horror',
  'kids',
  'learning',
  'sci-fi',
].map(category => (
  <option key={category} value={category}>{category}</option>
));

const mapDispatchToProps = dispatch => ({
  addBook: event => {
    event.preventDefault();
    const formElements = event.target.elements;
    const formCategoryValue = formElements.category.value;
    const formTitleValue = formElements.title.value;
    const book = {
      category: formCategoryValue,
      title: formTitleValue,
    };
    dispatch(addBook(book));
  },
});

const Component = ({ addBook }) => (
  <form id="books-form" onSubmit={addBook}>
    <fieldset>
      <legend>Book details</legend>
      <div className="field">
        <label htmlFor="category">
          Category
          <select name="category" id="category" defaultValue="null" required>
            <option value="null" disabled>Please choose a category</option>
            {categories}
          </select>
        </label>
      </div>
      <div className="field">
        <label htmlFor="title">
          Title
          <input type="text" name="title" id="title" placeholder="Best Book" />
        </label>
      </div>
    </fieldset>
    <button type="submit">Add Book</button>
  </form>
);

Component.propTypes = {
  addBook: PropTypes.func.isRequired,
};

const BooksForm = connect(null, mapDispatchToProps)(Component);

export default BooksForm;
