import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import '../styles/product-list.css';

const ProductList = ({ products, onAddToCart }) => {
    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
        </div>
    );
};

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    onAddToCart: PropTypes.func.isRequired,
};

export default ProductList;
