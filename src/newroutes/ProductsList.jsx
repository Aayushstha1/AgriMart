import { useNavigate } from 'react-router-dom';
import riceImg from '../assets/rice-field.jpg';

const sampleProducts = [
  { id: 1, name: 'Wheat', price: 1200, image: 'https://via.placeholder.com/100', description: 'High quality wheat, perfect for baking and cooking.' },
  { id: 2, name: 'Rice', price: 1500, image: riceImg, description: 'Fresh rice directly from the farm, rich in nutrients.' },
  { id: 3, name: 'Corn', price: 900, image: 'https://via.placeholder.com/100', description: 'Sweet and juicy corn, great for snacks and meals.' },
];

function ProductsList() {
  const navigate = useNavigate();

  return (
    <div>
      {sampleProducts.map(product => (
        <div
          key={product.id}
          onClick={() => navigate(`/product/${product.id}`)}
          style={{ cursor: 'pointer', padding: 16, borderBottom: '1px solid #eee' }}
        >
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductsList;