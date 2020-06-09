import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../actions';

const mapDispatchToProps = dispatch => ({
  changeFilter: filter => {
    dispatch(changeFilter(filter));
  },
});

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

const Component = ({ changeFilter }) => {
  const handleChange = e => {
    changeFilter(e.target.value);
  };
  return (
    <form id="filter-form">
      <fieldset>
        <legend>
          Filter details
        </legend>
        <div className="field">
          <label htmlFor="filter">
            Choose a filter
            <select
              id="filter"
              name="filter"
              defaultValue="all"
              required
              onChange={handleChange}
            >
              <option value="all">all</option>
              {categories}
            </select>
          </label>
        </div>
      </fieldset>
    </form>
  );
};

Component.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

const CategoryFilter = connect(null, mapDispatchToProps)(Component);

export default CategoryFilter;
