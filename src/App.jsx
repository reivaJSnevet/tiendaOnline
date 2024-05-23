import { useState, useEffect  } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import OrdersPage from './pages/OrdersPage';
import api from './db/api';
import './App.css';


function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get('/products')
        .then(response => {
            setProducts(response.data);
            console.log(response.data);
        })
        .catch(error => console.error(error));
}
, []);

  const handleAddToCart = (productId) => {
    if (cartItems.find(item => item.id === productId)) return;
    const product = products.find(p => p.id === productId);
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const handleCheckout = () => {
    setOrders([...orders, ...cartItems]);
    setCartItems([]);
  };

  const handleReturnOrder = (productId) => {
    setOrders(orders.filter(order => order.id !== productId));
  };

  return (
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path="/" element={<Home products={products} onAddToCart={handleAddToCart} />}/>
            <Route path="/product/:productId" element={<ProductDetail products={products} onAddToCart={handleAddToCart} />} />
            <Route path="/cart" element={<CartPage cartItems={cartItems} onRemove={handleRemoveFromCart} onCheckout={handleCheckout} />} />
            <Route path="/orders" element={<OrdersPage orders={orders} onReturn={handleReturnOrder} />} />
          </Route>
        </Routes>
  );
}

export default App;
