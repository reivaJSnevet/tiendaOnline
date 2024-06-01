import React, { useState, useEffect } from 'react';
import api from '../db/api';
import '../styles/order-page.css';

const OrdersPage = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        api.get('orders/user/1')
            .then(response => {
                setOrders(response.data);
            })
            .catch(error => console.error(error));
    }, []); 

    // Función para formatear la fecha y hora
    const formatDateTime = (dateTimeString) => {
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: 'numeric', 
            minute: 'numeric', 
            second: 'numeric' 
        };
        return new Date(dateTimeString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="orders-page">
            <h2 className="orders-page__title">Your Orders</h2>
            {orders.length === 0 && <p className="orders-page__empty">No orders yet.</p>}
            {orders.map(order => (
                <div key={order.id} className='order-item__price'>
                    <hr />
                    <p className="orders-page__order">Order ID: {order.id}</p>
                    <p>{formatDateTime(order.createdAt)}</p>
                    {order.OrderItems.map(item => (
                        <div key={item.id} className="order-item">
                            <img src={item.Product.imageUrl} alt={item.Product.name} className="order-item__image" />
                            <p className="order-item__name">
                                {item.Product.name} - ${item.Product.price} x {item.quantity}
                            </p>
                        </div>
                    ))}
                    <p className="order-item__price">
                        Status: {order.status} - Total: ${order.total}
                    </p>
                </div>
            ))}
        </div>
    );
};
 
export default OrdersPage;

