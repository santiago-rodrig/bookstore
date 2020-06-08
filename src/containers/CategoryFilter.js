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
    <div className="panel" id="filter-container">
      <h2>Choose a filter</h2>
      <form id="filter-form">
        <div className="field">
          <label htmlFor="filter">
            Filter
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
      </form>
    </div>
  );
};
Component.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};
const CategoryFilter = connect(null, mapDispatchToProps)(Component);
export default CategoryFilter;
