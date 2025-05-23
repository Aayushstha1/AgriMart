import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Dashboard.css';

const AdminDashboard = () => {
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Dashboard', icon: '📊', path: '/admin' },
    { name: 'Manage Users', icon: '👥', path: '/admin/manage-users' },
    { name: 'Products', icon: '📦', path: '/admin/products' },
    { name: 'Orders', icon: '🛍️', path: '/admin/orders' },
    { name: 'Reports', icon: '📈', path: '/admin/reports' },
    { name: 'Settings', icon: '⚙️', path: '/admin/settings' }
  ];

  const handleMenuClick = (menuName, path) => {
    setActiveMenu(menuName);
    navigate(path);
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
            <p>1,000</p>
            <span className="trend positive">↑ 12%</span>
          </div>
          <div className="stat-card">
            <h3>Total Products</h3>
            <p>567</p>
            <span className="trend positive">↑ 8%</span>
          </div>
          <div className="stat-card">
            <h3>Total Orders</h3>
            <p>289</p>
            <span className="trend negative">↓ 3%</span>
          </div>
          <div className="stat-card">
            <h3>Revenue</h3>
            <p>RS 45,678</p>
            <span className="trend positive">↑ 15%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;