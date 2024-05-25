import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import useCartStore from '../stores/cartStore';
import '../styles/product-card.css';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const addToCart = useCartStore(state => state.addToCart);

    const handleAddToCart = () => {
        addToCart(
            {   
                ...product,
                productId: product.id,
                quantity: 1
            }
        )
    };

    return (
        <div className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-card__image" />
            <h2 className="product-card__title">{product.name}</h2>
            <p className="product-card__description">{product.description}</p>
            <p className="product-card__price">${product.price}</p>
            <div className="product-card__button-container">
                <button className="product-card__button" onClick={() => handleAddToCart()}>Add to Cart</button>
                <button className="product-card__button" onClick={()=> navigate(`/product/${product.id}`)}>View Details</button>
            </div>
            <p className="product-card__stock">Stock: {product.stock}</p>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
};


export default ProductCard;


