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
  const handleInputChange = e => setTitle(e.target.value);
  const handleSelectChange = e => setCategory(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    const book = { category, title };
    addBook(book);
    setCategory('');
    setTitle('');
    e.target.elements.category.value = '';
  };

  return (
    <div id="books-form-container">
      <h2>add a new book</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Book title"
            value={title}
            onChange={handleInputChange}
          />
        </div>
        <div className="field">
          <select
            name="category"
            id="category"
            defaultValue=""
            required
            onChange={handleSelectChange}
          >
            <option value="" disabled>Category</option>
            {categories}
          </select>
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
