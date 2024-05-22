import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import '../styles/cart-page.css';

const CartPage = ({ cartItems, onRemove, onCheckout }) => {
    return (
        <div className="cart-page">
            <Cart cartItems={cartItems} onRemove={onRemove} />
            {cartItems.length > 0 && <button className="cart__checkout-button" onClick={onCheckout}>Checkout</button>}
        </div>
    );
};

CartPage.propTypes = {
    cartItems: PropTypes.array.isRequired,
    onRemove: PropTypes.func.isRequired,
    onCheckout: PropTypes.func.isRequired,
};

export default CartPage;
