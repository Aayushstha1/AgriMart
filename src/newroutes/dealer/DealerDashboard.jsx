import './Dashboard.css';

const DealerDashboard = () => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Dealer Panel</h2>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>My Products</li>
            <li>Orders</li>
            <li>Add Product</li>
            <li>Profile</li>
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <div className="header">
          <h1>Dealer Dashboard</h1>
        </div>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Active Products</h3>
            <p>45</p>
          </div>
          <div className="stat-card">
            <h3>Pending Orders</h3>
            <p>12</p>
          </div>
          <div className="stat-card">
            <h3>Total Sales</h3>
            <p>₹23,456</p>
          </div>
          <div className="stat-card">
            <h3>Reviews</h3>
            <p>4.5/5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealerDashboard;