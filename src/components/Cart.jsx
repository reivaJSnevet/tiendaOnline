import PropTypes from 'prop-types';
import useCartStore from '../stores/cartStore';
import '../styles/cart.css';

const Cartcard = ({ cartItem}) => {
    const removeFromCart = useCartStore(state => state.removeFromCart);
    const updateQuantity = useCartStore(state => state.updateQuantity);

    const handleQuantityChange = (number) => {
        if (cartItem.quantity === 1 && number === -1) return;
        updateQuantity(cartItem.id, cartItem.quantity + number);
    }

    return (
        <div key={cartItem.id} className="cart-item">
            <span className="cart-item__name">{cartItem.name} x {cartItem.quantity}</span>                    
            <div className="cart-item__quantity">
                <button className="cart-item__buttona" onClick={() => handleQuantityChange(-1)}>-</button>
                <button className="cart-item__buttona" onClick={() => handleQuantityChange(1)}>+</button>
            </div>
            <span className="cart-item__price">${cartItem.price}</span>
            <span className="cart-item__total">${parseFloat((cartItem.price * cartItem.quantity).toFixed(2))}</span>

            <button className="cart-item__button" onClick={() => removeFromCart(cartItem.id)}>Remove</button>
        </div>
    );
};

const Cart = ({ cart, total }) => {

    return (
        <div className="cart">
            <h2 className="cart__title">Shopping Cart</h2>
            <p className="cart__total">Total: ${total.toFixed(2)}</p>
            { cart && cart.map(cartItem => (
                <Cartcard key={cartItem.id} cartItem={cartItem} total={total}/>
            ))}
        </div>
    );
};

Cartcard.propTypes = {
    cartItem: PropTypes.object.isRequired,
    total: PropTypes.number.isRequired,
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired,
};


export default Cart;
