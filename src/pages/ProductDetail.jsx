import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useCartStore from '../stores/cartStore';
import '../styles/product-detail.css';

const ProductDetail = ({ products }) => {
  const { productId } = useParams();
  const addToCart = useCartStore(state => state.addToCart);
  const product = products.find(p => p.id === parseInt(productId));

  const handleAddToCart = () => {
    addToCart({
        ...product,
        productId: product.id,
        quantity: 1
    });
    toast.success(`${product.name} added to cart!`);
  }


  if (!product) {
    return <div className="product-detail__not-found">Product not found</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.imageUrl} alt={product.name} className="product-detail__image" />
      <h1 className="product-detail__title">{product.name}</h1>
      <p className="product-detail__description">{product.description}</p>
      <p className="product-detail__price">{product.price}</p>
      <button className="product-detail__button" onClick={() => handleAddToCart()}>Add to Cart</button>
      <p className="product-detail__stock">Stock: {product.stock}</p>
    </div>
  );
};

ProductDetail.propTypes = {
    products: PropTypes.array.isRequired,};

export default ProductDetail;
