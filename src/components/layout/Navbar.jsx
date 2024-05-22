import { Link } from 'react-router-dom';
import '../../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__link">
        <i className="fas fa-home navbar__icon"></i>
        Home
      </Link>
      <Link to="/cart" className="navbar__link">
        <i className="fas fa-shopping-cart navbar__icon"></i>
        Cart
      </Link>
      <Link to="/orders" className="navbar__link">
        <i className="fas fa-box navbar__icon"></i>
        Orders
      </Link>
    </nav>
  );
};

export default Navbar;
