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
  addBook: book => {
    dispatch(addBook(book));
  },
});

const Component = ({ addBook }) => {
  const [title, setTitle] = React.useState('');
  const [category, setCategory] = React.useState('');
  const handleInputChange = e => {
    setTitle(e.target.value);
  };
  const handleSelectChange = e => {
    setCategory(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const book = { category, title };
    addBook(book);
    setCategory('');
    setTitle('');
    e.target.elements.category.value = '';
  };
  return (
    <div id="books-form-container" className="panel">
      <h2>Add a new book</h2>
      <form id="books-form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="category">
            Category
            <select
              name="category"
              id="category"
              defaultValue=""
              required
              onChange={handleSelectChange}
            >
              <option value="" disabled>Please choose a category</option>
              {categories}
            </select>
          </label>
        </div>
        <div className="field">
          <label htmlFor="title">
            Title
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Best Book"
              value={title}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="field">
          <button type="submit">Add Book</button>
        </div>
      </form>
    </div>
  );
};

Component.propTypes = {
  addBook: PropTypes.func.isRequired,
};

const BooksForm = connect(null, mapDispatchToProps)(Component);

export default BooksForm;
