import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import OrdersPage from './pages/OrdersPage';
import './App.css';
import Layout from './components/layout/Layout';

// Datos de ejemplo
// Datos de ejemplo en App.jsx
const products = [
    { id: 1, name: 'Camisa azul', shortDescription: 'Camisa de marca de color azul', longDescription: 'Long description of headphones', image: 'https://caterpillarcr.com/cdn/shop/files/2610628_12815_Standard-Stone.jpg?v=1695391085', price: '$50' },
    { id: 2, name: 'Camisa manga larga roja', shortDescription: 'Camisa manga larga de color roja de tipo formal', longDescription: 'Long description of smartphone', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj9bmOSudJTGyarr33VwWpFnPyWZwAw8ankISM44J4yQ&s', price: '$300' },
    { id: 3, name: 'Vestido rojo', shortDescription: 'Vestido rojo con cinta en la cintura y patrón de flores', longDescription: 'Long description of laptop', image: 'https://images-cdn.ubuy.co.in/65564d4e2c4e15509810f25b-cdress-women-39-s-short-homecoming.jpg', price: '$800' },

    { id: 4, name: 'Blusa celeste', shortDescription: 'Blusa de corta de color celeste', longDescription: 'Long description of watch', image: 'https://www.shutterstock.com/image-photo/woman-blouse-blue-cotton-on-260nw-2075948374.jpg', price: '$150' },
    { id: 5, name: 'Medias largas de mujer', shortDescription: 'Medias larga para mujer ', longDescription: 'Long description of camera', image: 'https://cdn.webshopapp.com/shops/256256/files/366297763/800x1067x3/medias-largas-basicas-70d.jpg', price: '$400' },
    
    
  ];
  

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);

  const handleAddToCart = (productId) => {
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
