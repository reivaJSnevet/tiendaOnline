import PropTypes from 'prop-types';
import '../styles/order-page.css';
const OrdersPage = ({ orders, onReturn }) => {
    return (
        <div className="orders-page">
            <h2 className="orders-page__title">Your Orders</h2>
            {orders.length === 0 && <p className="orders-page__empty">No orders yet.</p>}
            {orders.map(order => (
                <div key={order.id} className="order-item">
                    <span className="order-item__name">{order.name}</span>
                    <span className="order-item__price">{order.price}</span>
                    <button className="order-item__button" onClick={() => onReturn(order.id)}>Return</button>
                </div>
            ))}
        </div>
    );
};

OrdersPage.propTypes = {
    orders: PropTypes.array.isRequired,
    onReturn: PropTypes.func.isRequired
};


export default OrdersPage;

