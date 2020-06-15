import React from 'react';
import PropTypes from 'prop-types';

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

const Component = ({ handleFilterChange }) => (
  <div id="filter">
    <h2>Choose a filter</h2>
    <form>
      <div className="field">
        <label htmlFor="filter-category">
          Filter
          <select
            id="filter-category"
            name="filter-category"
            defaultValue="all"
            required
            onChange={handleFilterChange}
          >
            <option value="all">all</option>
            {categories}
          </select>
        </label>
      </div>
    </form>
  </div>
);

Component.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default Component;
