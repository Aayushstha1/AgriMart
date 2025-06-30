import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Dashboard.css';
import ProductsList from '../ProductsList';

const CustomerDashboard = () => {
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Dashboard', icon: '🏠', path: '/customer/dashboard' },
    { name: 'Cart', icon: '🛒', path: '/cart' },
    { name: 'Favorites', icon: '❤️', path: '/favorites' },
    { name: 'Orders', icon: '🛍️', path: '/customer/orders' },
    { name: 'Settings', icon: '⚙️', path: '/settings' }
  ];

  const handleMenuClick = (menuName, path) => {
    setActiveMenu(menuName);
    navigate(path);
  };

  const handleLogout = () => {
    // Clear user session/token here
    // Example: localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Customer Panel</h2>
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
            <li onClick={handleLogout}>
              <span className="menu-icon">🚪</span>
              Logout
            </li>
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <div className="header">
          <h1>Welcome back, Sir.</h1>
          <div className="customer-profile">
            <span className="customer-name">Customer</span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        </div>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Cart Items</h3>
            <p>--</p>
          </div>
          <div className="stat-card">
            <h3>Favorites</h3>
            <p>--</p>
          </div>
          <div className="stat-card">
            <h3>Orders</h3>
            <p>--</p>
          </div>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <ProductsList />
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;