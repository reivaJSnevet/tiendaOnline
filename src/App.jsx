import { useState, useEffect  } from 'react';
import { Routes, Route } from 'react-router-dom';
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
  const [orders, setOrders] = useState([]);
  const cart = useCartStore(state => state.cart);
  const order = useOrderStore(state => state.order);
  const clearCart = useCartStore(state => state.clearCart);
  const clearOrder = useOrderStore(state => state.clearOrder);

  useEffect(() => {
    api.get('/products')
        .then(response => {
            const priceToFloat = response.data.map(product => {
                return {...product, price: parseFloat(product.price)};
            });
            setProducts(priceToFloat);
            console.log(response.data);
        })
        .catch(error => console.error(error));
}
, []);

  const handleCheckout = () => {
    const items = cart

    api.post('/orders', { order, items }).then(response => {
        console.log(response.data);
        clearCart();
        clearOrder();
    });
  };

  const handleReturnOrder = (productId) => {
    setOrders(orders.filter(order => order.id !== productId));
  };

  return (
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path="/" element={<Home products={products} />}/>
            <Route path="/product/:productId" element={<ProductDetail products={products} />} />
            <Route path="/cart" element={<CartPage onCheckout={handleCheckout} />} />
            <Route path="/orders" element={<OrdersPage orders={orders} onReturn={handleReturnOrder} />} />
          </Route>
        </Routes>
  );
}

export default App;
