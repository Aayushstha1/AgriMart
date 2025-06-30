import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import riceImg from '../assets/rice-field.jpg';
import './ProductsList.css';

const sampleProducts = [
  { id: 1, name: 'Wheat', price: 1200, image: 'https://via.placeholder.com/100', description: 'High quality wheat, perfect for baking and cooking.' },
  { id: 2, name: 'Rice', price: 1500, image: riceImg, description: 'Fresh rice directly from the farm, rich in nutrients.' },
  { id: 3, name: 'Corn', price: 900, image: 'https://via.placeholder.com/100', description: 'Sweet and juicy corn, great for snacks and meals.' },
  { id: 4, name: 'Barley', price: 1100, image: 'https://via.placeholder.com/100', description: 'Nutritious barley, ideal for soups and salads.' },
  { id: 5, name: 'Oats', price: 1300, image: 'https://via.placeholder.com/100', description: 'Healthy oats, perfect for breakfast and baking.' },
  { id: 6, name: 'Millet', price: 1000, image: 'https://via.placeholder.com/100', description: 'Gluten-free millet, great for porridge and rotis.' },
  { id: 7, name: 'Sorghum', price: 950, image: 'https://via.placeholder.com/100', description: 'Rich in fiber, good for healthy diets.' },
  { id: 8, name: 'Basmati Rice', price: 1800, image: 'https://via.placeholder.com/100', description: 'Premium long-grain basmati rice.' },
  { id: 9, name: 'Moong Dal', price: 1400, image: 'https://via.placeholder.com/100', description: 'Protein-rich moong dal for healthy meals.' },
  { id: 10, name: 'Chickpeas', price: 1250, image: 'https://via.placeholder.com/100', description: 'Fresh chickpeas, perfect for curries and salads.' },
];

function ProductsList({ onProductClick }) {
  const navigate = useNavigate();
  const [favourites, setFavourites] = useState([]);

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    if (window.confirm(`Do you want to add "${product.name}" to cart?`)) {
      alert(`${product.name} added to cart!`);
    }
  };

  const handleAddToFavourite = (product, e) => {
    e.stopPropagation();
    if (favourites.includes(product.id)) return;
    if (window.confirm(`Do you want to add "${product.name}" to favourites?`)) {
      setFavourites([...favourites, product.id]);
      alert(`${product.name} added to favourites!`);
    }
  };

  return (
    <div>
      <h2 style={{
        textAlign: 'center',
        color: '#388e3c',
        marginBottom: '18px',
        fontWeight: 'bold',
        letterSpacing: '1px'
      }}>
        This is our sample product
      </h2>
      <div className="products-list">
        {sampleProducts.map(product => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => onProductClick ? onProductClick(product) : navigate(`/product/${product.id}`)}
          >
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-title">{product.name}</h3>
            <p className="product-price">₹{product.price}</p>
            <div className="product-buttons">
              <button
                className="cart-btn"
                onClick={e => handleAddToCart(product, e)}
                title="Add to Cart"
              >
                🛒
              </button>
              <button
                className={`fav-btn${favourites.includes(product.id) ? ' fav-btn-active' : ''}`}
                onClick={e => handleAddToFavourite(product, e)}
                title="Add to Favourite"
              >
                {favourites.includes(product.id) ? '❤️' : '🤍'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;