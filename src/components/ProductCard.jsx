import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../styles/product-card.css';

const ProductCard = ({ product, onAddToCart }) => {
    const navigate = useNavigate();

    return (
        <div className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-card__image" />
            <h2 className="product-card__title">{product.name}</h2>
            <p className="product-card__description">{product.description}</p>
            <p className="product-card__price">${product.price}</p>
            <div className="product-card__button-container">
                <button className="product-card__button" onClick={() => onAddToCart(product.id)}>Add to Cart</button>
                <button className="product-card__button" onClick={()=> navigate(`/product/${product.id}`)}>View Details</button>
            </div>
            <p className="product-card__stock">Stock: {product.stock}</p>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
    onAddToCart: PropTypes.func.isRequired
};


export default ProductCard;


