import './Dashboard.css';

const FarmerDashboard = () => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Farmer Panel</h2>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>My Crops</li>
            <li>Market Prices</li>
            <li>Sales History</li>
            <li>Profile</li>
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <div className="header">
          <h1>Farmer Dashboard</h1>
        </div>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Active Listings</h3>
            <p>8</p>
          </div>
          <div className="stat-card">
            <h3>Total Sales</h3>
            <p>₹12,345</p>
          </div>
          <div className="stat-card">
            <h3>Current Orders</h3>
            <p>5</p>
          </div>
          <div className="stat-card">
            <h3>Rating</h3>
            <p>4.8/5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;