import './Dashboard.css';

const AdminDashboard = () => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Manage Users</li>
            <li>Products</li>
            <li>Orders</li>
            <li>Reports</li>
            <li>Settings</li>
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <div className="header">
          <h1>Admin Dashboard</h1>
        </div>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Users</h3>
            <p>1,000</p>
          </div>
          <div className="stat-card">
            <h3>Total Products</h3>
            <p>5</p>
          </div>
          <div className="stat-card">
            <h3>Total Orders</h3>
            <p>Num</p>
          </div>
          <div className="stat-card">
            <h3>Revenue</h3>
            <p>...RS..</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;