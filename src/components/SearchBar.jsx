import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import api from '../db/api';
import '../styles/search-bar.css';

const SearchBar = ({ onSearch, onFilter}) => {
  const [query, setQuery] = useState('');
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState('all');


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get('/categories');
                setCategories(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProducts();
    }, []);

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <>
    <div className="category-filter">
        <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            className="category-filter__select"
        >
            <option value="all">All</option>
            {categories.map((category) => (
            <option key={category.id} value={category.id}>
                {category.name}
            </option>
            ))}
        </select>
        <button className="category-filter__button" onClick={() => onFilter(categoryId)}>Filter</button>
    </div>
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
    </>
  );
};

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
    onFilter: PropTypes.func.isRequired,
    };

export default SearchBar;

