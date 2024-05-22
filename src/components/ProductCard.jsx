import PropTypes from 'prop-types';
import '../styles/product-card.css';

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-card__image" />
            <h2 className="product-card__title">{product.name}</h2>
            <p className="product-card__description">{product.shortDescription}</p>
            <p className="product-card__price">{product.price}</p>
            <div className="product-card__button-container">
                <button className="product-card__button" onClick={() => onAddToCart(product.id)}>Add to Cart</button>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
    onAddToCart: PropTypes.func.isRequired
};


export default ProductCard;


