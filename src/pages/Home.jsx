import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';



const Home = ({ products, onAddToCart }) => {
    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleSearch = (query) => {
        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    return (
        <div className="home">
            <SearchBar onSearch={handleSearch} />
            <ProductList products={filteredProducts} onAddToCart={onAddToCart} />
        </div>
    );
};

Home.propTypes = {
    products: PropTypes.array.isRequired,
    onAddToCart: PropTypes.func.isRequired
};


export default Home;
