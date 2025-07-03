import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Dashboard.css';
import ProductsList from '../ProductsList';

const sampleOrders = [
 
];

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
    navigate('/login');
  };

  return (
    <div className="dashboard customer-dashboard-bg">
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
        {/* Welcome Banner */}
        <div className="welcome-banner" style={{
          background: 'linear-gradient(90deg, #43ea7a 0%, #1976d2 100%)',
          color: '#fff',
          borderRadius: '18px',
          padding: '28px 32px',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 4px 24px rgba(25, 118, 210, 0.10)'
        }}>
          <div>
            <h1 style={{ margin: 0, fontWeight: 800, fontSize: '2.2rem', letterSpacing: '1px' }}>
              Welcome back, Sir!
            </h1>
            <p style={{ margin: '8px 0 0 0', fontSize: '1.1rem', opacity: 0.93 }}>
              Explore the best deals and manage your orders easily.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <img
              src=""
              alt="Customer Avatar"
              style={{
                width: 70,
                height: 70,
                borderRadius: '50%',
                border: '3px solid #fff',
                boxShadow: '0 2px 12px rgba(25, 118, 210, 0.13)'
              }}
            />
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        </div>
        {/* Stats Cards */}
        <div className="stats-grid" style={{
          display: 'flex',
          gap: '32px',
          marginBottom: '2.5rem',
          flexWrap: 'wrap'
        }}>
          <div className="stat-card" style={{
            background: '#fff',
            borderRadius: '14px',
            boxShadow: '0 2px 12px rgba(25, 118, 210, 0.07)',
            padding: '22px 32px',
            minWidth: 180,
            flex: 1
          }}>
            <h3 style={{ color: '#1976d2', margin: 0 }}>Cart Items</h3>
            <p style={{ fontSize: 28, fontWeight: 700, color: '#388e3c', margin: '10px 0 0 0' }}>3</p>
          </div>
          <div className="stat-card" style={{
            background: '#fff',
            borderRadius: '14px',
            boxShadow: '0 2px 12px rgba(25, 118, 210, 0.07)',
            padding: '22px 32px',
            minWidth: 180,
            flex: 1
          }}>
            <h3 style={{ color: '#e53935', margin: 0 }}>Favorites</h3>
            <p style={{ fontSize: 28, fontWeight: 700, color: '#e53935', margin: '10px 0 0 0' }}>5</p>
          </div>
          <div className="stat-card" style={{
            background: '#fff',
            borderRadius: '14px',
            boxShadow: '0 2px 12px rgba(25, 118, 210, 0.07)',
            padding: '22px 32px',
            minWidth: 180,
            flex: 1
          }}>
            <h3 style={{ color: '#ff9800', margin: 0 }}>Orders</h3>
            <p style={{ fontSize: 28, fontWeight: 700, color: '#ff9800', margin: '10px 0 0 0' }}>2</p>
          </div>
        </div>
        {/* Recent Orders */}
        <div className="recent-orders" style={{
          background: '#fff',
          borderRadius: '14px',
          boxShadow: '0 2px 12px rgba(25, 118, 210, 0.07)',
          padding: '24px 18px 18px 18px',
          marginBottom: '2.5rem'
        }}>
          <h2 style={{ color: '#1976d2', margin: '0 0 18px 0', fontSize: '1.3rem' }}>Recent Orders</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '1rem' }}>
            <thead>
              <tr style={{ background: '#e3f2fd' }}>
                <th style={{ padding: '10px', borderRadius: '8px 0 0 8px', color: '#1976d2' }}>Order ID</th>
                <th style={{ padding: '10px', color: '#1976d2' }}>Product</th>
                <th style={{ padding: '10px', color: '#1976d2' }}>Date</th>
                <th style={{ padding: '10px', color: '#1976d2' }}>Status</th>
                <th style={{ padding: '10px', borderRadius: '0 8px 8px 0', color: '#1976d2' }}>Amount</th>
              </tr>
            </thead>
            <tbody>
              {sampleOrders.map(order => (
                <tr key={order.id}>
                  <td style={{ padding: '10px', fontWeight: 600 }}>{order.id}</td>
                  <td style={{ padding: '10px' }}>{order.product}</td>
                  <td style={{ padding: '10px' }}>{order.date}</td>
                  <td style={{ padding: '10px' }}>
                    <span style={{
                      color: order.status === 'Delivered' ? '#388e3c' : '#ff9800',
                      fontWeight: 600
                    }}>
                      {order.status}
                    </span>
                  </td>
                  <td style={{ padding: '10px', fontWeight: 600 }}>Rs.{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Products List */}
        <div style={{ marginTop: '2rem' }}>
          <ProductsList />
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;