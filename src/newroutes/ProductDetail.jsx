import { Route, BrowserRouter as Router, Routes, useParams } from 'react-router-dom';
import riceImg from '../assets/rice-field.jpg';
import Homes from '../newroutes/Homes';

const sampleProducts = [
  { id: 1, name: 'Wheat', price: 1200, image: 'https://via.placeholder.com/100', description: 'High quality wheat, perfect for baking and cooking.' },
  { id: 2, name: 'Rice', price: 1500, image: riceImg, description: 'Fresh rice directly from the farm, rich in nutrients.' },
  { id: 3, name: 'Corn', price: 900, image: 'https://via.placeholder.com/100', description: 'Sweet and juicy corn, great for snacks and meals.' },
];

function ProductDetail() {
  const { id } = useParams();
  const product = sampleProducts.find(p => p.id === Number(id));

  if (!product) return <div>Product not found.</div>;

  const handleAddToCart = () => {
    alert(`${product.name} added to cart!`);
  };

  const handleAddToFavourite = () => {
    alert(`${product.name} added to favourites!`);
  };

  return (
    <div style={{
      padding: 32,
      maxWidth: 450,
      margin: '40px auto',
      border: '1px solid #eee',
      borderRadius: 16,
      boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
      background: '#fff'
    }}>
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: 250,
          display: 'block',
          margin: '0 auto 24px',
          borderRadius: 12,
          boxShadow: '0 2px 12px rgba(0,0,0,0.07)'
        }}
      />
      <h2 style={{ textAlign: 'center', marginBottom: 8 }}>{product.name}</h2>
      <p style={{ color: '#555', textAlign: 'center', marginBottom: 16 }}>{product.description}</p>
      <p style={{ fontWeight: 'bold', fontSize: 22, color: '#388e3c', textAlign: 'center', marginBottom: 24 }}>
        Price: ₹{product.price}
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
        <button
          onClick={handleAddToCart}
          style={{
            background: '#388e3c',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '10px 18px',
            fontSize: 18,
            cursor: 'pointer'
          }}
        >
          🛒 Add to Cart
        </button>
        <button
          onClick={handleAddToFavourite}
          style={{
            background: '#fff',
            color: '#e53935',
            border: '1.5px solid #e53935',
            borderRadius: 8,
            padding: '10px 14px',
            fontSize: 18,
            cursor: 'pointer'
          }}
        >
          ❤️ Favourite
        </button>
      </div>
    </div>
  );
}

function ProductsList({ ...props }) {
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="product/:id" element={<ProductDetail />} />
        {/* other routes */}
      </Routes>
    </Router>
  );
}

export default App;