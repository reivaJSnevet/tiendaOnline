import PropTypes from 'prop-types';
import '../styles/cart.css';

const Cart = ({ cartItems, onRemove }) => {
    return (
        <div className="cart">
            <h2 className="cart__title">Shopping Cart</h2>
            {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                    <span className="cart-item__name">{item.name}</span>
                    <span className="cart-item__price">{item.price}</span>
                    <button className="cart-item__button" onClick={() => onRemove(item.id)}>Remove</button>
                </div>
            ))}
        </div>
    );
};

Cart.propTypes = {
    cartItems: PropTypes.array.isRequired,
    onRemove: PropTypes.func.isRequired
};


export default Cart;
