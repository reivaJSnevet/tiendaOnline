import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import OrdersPage from './pages/OrdersPage';
import api from './db/api';
import useCartStore from './stores/cartStore';
import useOrderStore from './stores/orderStore';
import './App.css';

function App() {
    const [products, setProducts] = useState([]);
    const cart = useCartStore(state => state.cart);
    const order = useOrderStore(state => state.order);
    const clearCart = useCartStore(state => state.clearCart);
    const clearOrder = useOrderStore(state => state.clearOrder);

    useEffect(() => {
        api.get('/products')
            .then(response => {
                const priceToFloat = response.data.map(product => {
                    return { ...product, price: parseFloat(product.price) };
                });
                setProducts(priceToFloat);
            })
            .catch(error => console.error(error));
    }, [order]);


    const handleCheckout = () => {
        const items = cart;

        api.post('/orders', { order, items }).then(response => {
            clearCart();
            clearOrder();
        });
    };

    const handleAddToCart = (product) => {
        useCartStore.getState().addProduct(product);
        toast.success(`${product.name} se ha agregado al carrito de forma exitosa!`);
    };

    return (
        <>
            <ToastContainer />
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path="/" element={<Home products={products} onAddToCart={handleAddToCart} />} />
                    <Route path="/product/:productId" element={<ProductDetail products={products} onAddToCart={handleAddToCart} />} />
                    <Route path="/cart" element={<CartPage onCheckout={handleCheckout} />} />
                    <Route path="/orders" element={<OrdersPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
