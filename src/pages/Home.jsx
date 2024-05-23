import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';

const Home = ( {products, onAddToCart} ) => {
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);
    
    const handleSearch = (query) => {
        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    return (
        <div className="home">
            <SearchBar onSearch={handleSearch} />
           {
                products.length > 0 ? (
                     <ProductList products={filteredProducts} onAddToCart={onAddToCart} />
                ) : (
                     <p>Loading...</p>
                )
              
           }
        </div>
    );
};

Home.propTypes = {
    products: PropTypes.array.isRequired,
    onAddToCart: PropTypes.func.isRequired
};


export default Home;
