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
            onChange={handleFilterChange}
          >
            <option value="all">all</option>
            {categories}
          </select>
        </label>
      </div>
    </fieldset>
  </form>
);

Component.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default Component;
