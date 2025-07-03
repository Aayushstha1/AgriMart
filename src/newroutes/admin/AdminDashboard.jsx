import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Dashboard.css';
import ManageUsers from './ManageUsers';

const initialProducts = [
  { id: 1, name: 'Wheat', price: 1200 },
  { id: 2, name: 'Rice', price: 1500 },
  { id: 3, name: 'Corn', price: 900 },
];

const AdminDashboard = () => {
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const [products, setProducts] = useState(initialProducts);
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Dashboard', icon: '📊', path: '/admin' },
    { name: 'Manage Users', icon: '👥', path: '/admin/Manageusers' },
    { name: 'Products', icon: '📦', path: '/admin/products' },
    { name: 'Orders', icon: '🛍️', path: '/admin/orders' },
    { name: 'Reports', icon: '📈', path: '/admin/reports' },
    { name: 'Settings', icon: '⚙️', path: '/admin/settings' }
  ];

  const handleMenuClick = (menuName, path) => {
    setActiveMenu(menuName);
    navigate(path);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price) return;
    setProducts([
      ...products,
      { id: Date.now(), name: newProduct.name, price: Number(newProduct.price) }
    ]);
    setNewProduct({ name: '', price: '' });
  };

  const handleRemoveProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <nav>
          <ul>
            {menuItems.map((item) => (
              <li 
                key={item.name}
                className={activeMenu === item.name ? 'active' : ''}
                onClick={() => handleMenuClick(item.name, item.path)}
              >
                <span className="menu-icon">{item.icon}</span>
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <div className="header">
          <h1>Admin Dashboard</h1>
          <div className="admin-profile">
            <span className="admin-name">Admin</span>
            <button className="logout-btn">Logout</button>
          </div>
        </div>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Users</h3>
            <p></p>
            <span className="trend positive"></span>
          </div>
          <div className="stat-card">
            <h3>Total Products</h3>
            <p></p>
            <span className="trend positive"></span>
          </div>
          <div className="stat-card">
            <h3>Total Orders</h3>
            <p></p>
            <span className="trend negative"></span>
          </div>
          <div className="stat-card">
            <h3>Revenue</h3>
            <p></p>
            <span className="trend positive"></span>
          </div>
        </div>

        {activeMenu === 'Manage Users' && (
          <ManageUsers />
        )}

        {activeMenu === 'Products' && (
          <div style={{ marginTop: '2rem', position: 'relative' }}>
            <h2 style={{
              margin: 0,
              marginBottom: '1.5rem',
              fontWeight: 800,
              fontSize: '2rem',
              letterSpacing: '1px',
              color: '#1976d2',
              textShadow: '0 2px 8px #e3f2fd'
            }}>
              Manage Products
            </h2>
            <form
              onSubmit={handleAddProduct}
              style={{
                display: 'flex',
                gap: '12px',
                background: 'rgba(255,255,255,0.7)',
                padding: '16px 24px',
                borderRadius: '18px',
                boxShadow: '0 8px 32px rgba(25, 118, 210, 0.10)',
                position: 'sticky',
                top: 0,
                zIndex: 2,
                marginBottom: '2rem',
                backdropFilter: 'blur(6px)',
                border: '1.5px solid #e3f2fd'
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={newProduct.name}
                onChange={handleInputChange}
                style={{
                  padding: '10px',
                  borderRadius: '10px',
                  border: '1.5px solid #90caf9',
                  minWidth: 140,
                  fontSize: 16,
                  fontWeight: 500,
                  background: '#f8fafc'
                }}
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={newProduct.price}
                onChange={handleInputChange}
                style={{
                  padding: '10px',
                  borderRadius: '10px',
                  border: '1.5px solid #90caf9',
                  minWidth: 100,
                  fontSize: 16,
                  fontWeight: 500,
                  background: '#f8fafc'
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '10px 28px',
                  borderRadius: '10px',
                  background: 'linear-gradient(90deg, #1976d2 0%, #43ea7a 100%)',
                  color: '#fff',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: 17,
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(25, 118, 210, 0.13)',
                  letterSpacing: '1px',
                  transition: 'background 0.18s, transform 0.13s'
                }}
              >
                + Add
              </button>
            </form>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '36px',
              justifyContent: products.length ? 'flex-start' : 'center'
            }}>
              {products.length === 0 ? (
                <div style={{
                  color: '#888',
                  fontSize: 20,
                  marginTop: 40,
                  fontWeight: 600,
                  letterSpacing: '1px'
                }}>No products yet.</div>
              ) : (
                products.map(product => (
                  <div
                    key={product.id}
                    style={{
                      background: 'rgba(255,255,255,0.85)',
                      border: '2px solid #e3f2fd',
                      borderRadius: '22px',
                      boxShadow: '0 8px 32px rgba(25, 118, 210, 0.13)',
                      width: 260,
                      padding: '28px 20px 22px 20px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      position: 'relative',
                      backdropFilter: 'blur(4px)',
                      transition: 'transform 0.18s, box-shadow 0.18s, border 0.18s'
                    }}
                  >
                    <div style={{
                      fontSize: 48,
                      marginBottom: 12,
                      color: '#43ea7a',
                      textShadow: '0 2px 8px #e3f2fd'
                    }}>
                      🛒
                    </div>
                    <div style={{
                      fontWeight: 800,
                      fontSize: 20,
                      marginBottom: 8,
                      color: '#1976d2',
                      letterSpacing: '0.5px'
                    }}>
                      {product.name}
                    </div>
                    <div style={{
                      color: '#388e3c',
                      fontWeight: 700,
                      fontSize: 18,
                      marginBottom: 16
                    }}>
                      ₹{product.price}
                    </div>
                    <button
                      onClick={() => handleRemoveProduct(product.id)}
                      style={{
                        background: 'linear-gradient(90deg, #e53935 0%, #ffb300 100%)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '10px',
                        padding: '8px 22px',
                        fontWeight: 700,
                        fontSize: 16,
                        cursor: 'pointer',
                        marginTop: 'auto',
                        boxShadow: '0 2px 8px rgba(229,57,53,0.07)',
                        letterSpacing: '1px',
                        transition: 'background 0.18s, transform 0.13s'
                      }}
                    >
                      Remove
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;