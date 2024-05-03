import React from 'react';

const Search = ({ onSearchChange }) => {
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default Search;