import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Cart from '../components/Cart';
import useCartStore from '../stores/cartStore';
import useOrderStore from '../stores/orderStore';
import '../styles/cart-page.css';

const CartPage = ({ onCheckout }) => {
    const cart = useCartStore(state => state.cart);
    const order = useOrderStore(state => state.order);
    const updateOrder = useOrderStore(state => state.updateOrder);

    useEffect(() => {
        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        updateOrder({ total });
        
    }, [cart]);

    return (
        <div className="cart-page">
            <Cart cart={cart} total={order.total}/>
            {cart.length > 0 && <button className="cart__checkout-button" onClick={onCheckout}>Checkout</button>}
        </div>
    );
};

CartPage.propTypes = {
    onCheckout: PropTypes.func.isRequired,
};

export default CartPage;
