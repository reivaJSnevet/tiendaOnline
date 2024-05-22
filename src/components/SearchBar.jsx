import PropTypes from 'prop-types';
import { useState } from 'react';
import '../styles/search-bar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-bar__input"
        placeholder="Search for products..."
      />
      <button className="search-bar__button" onClick={handleSearch}>Search</button>
    </div>
  );
};

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
    };

export default SearchBar;

