import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import '../styles/product-list.css';

const ProductList = ({ products }) => {
    return (
        <div className="product-list">
            {products?.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
};

export default ProductList;
