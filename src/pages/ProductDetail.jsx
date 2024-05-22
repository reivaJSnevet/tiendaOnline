import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ products, onAddToCart }) => {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div className="product-detail__not-found">Product not found</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} className="product-detail__image" />
      <h1 className="product-detail__title">{product.name}</h1>
      <p className="product-detail__description">{product.longDescription}</p>
      <p className="product-detail__price">{product.price}</p>
      <button className="product-detail__button" onClick={() => onAddToCart(product.id)}>Add to Cart</button>
    </div>
  );
};

ProductDetail.propTypes = {
    products: PropTypes.array.isRequired,
    onAddToCart: PropTypes.func.isRequired
};

export default ProductDetail;
