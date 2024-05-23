import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import '../styles/product-detail.css';

const ProductDetail = ({ products, onAddToCart }) => {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div className="product-detail__not-found">Product not found</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.imageUrl} alt={product.name} className="product-detail__image" />
      <h1 className="product-detail__title">{product.name}</h1>
      <p className="product-detail__description">{product.description}</p>
      <p className="product-detail__price">{product.price}</p>
      <button className="product-detail__button" onClick={() => onAddToCart(product.id)}>Add to Cart</button>
      <p className="product-detail__stock">Stock: {product.stock}</p>
    </div>
  );
};

ProductDetail.propTypes = {
    products: PropTypes.array.isRequired,
    onAddToCart: PropTypes.func.isRequired
};

export default ProductDetail;
