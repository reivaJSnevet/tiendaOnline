import { useState, useEffect } from 'react';
import api from '../db/api';
import '../styles/order-page.css';

const OrdersPage = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        api.get('orders/user/1')
            .then(response => {
                setOrders(response.data);
                console.log(response.data);
            })
            .catch(error => console.error(error));
    }, []);


    return (
        <div className="orders-page">
            <h2 className="orders-page__title">Your Orders</h2>
            {orders.length === 0 && <p className="orders-page__empty">No orders yet.</p>}
            {orders.map(order => (
                <div
                key={order.id}
                >
                    <hr />
                {
                    order.OrderItems.map(item => (
                        <p 
                        key={item.id}
                        className="orders-page__item"
                        >
                        {item.Product.name} - ${item.Product.price} x {item.quantity}
                        </p>
                    ))
                }
               <p 
                key={order.id}
                className="orders-page__order"
               >
                status: {order.status} - total: ${order.total}
               </p>
               </div>
            ))}
        </div>
    );
};


export default OrdersPage;

