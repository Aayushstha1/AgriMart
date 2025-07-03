import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DeliveryBoyDashboard.css';

const initialOrders = [
 
];

const DeliveryBoyDashboard = () => {
  const [assignedOrders, setAssignedOrders] = useState(initialOrders);
  const navigate = useNavigate();

  const handleStatusChange = (orderId, newStatus) => {
    setAssignedOrders(orders =>
      orders.map(order =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const handleLogout = () => {
    // Clear authentication here if needed
    navigate('/login');
  };

  return (
    <div className="db-dashboard">
      <header className="db-header">
        <div>
          <h1>🚚 Delivery Dashboard</h1>
          <span className="db-welcome">Welcome, Delivery Boy</span>
        </div>
        <button className="db-logout-btn" onClick={handleLogout}>Logout</button>
      </header>
      <main className="db-main">
        <section className="db-summary">
          <div className="db-summary-card">
            <div className="db-summary-icon pending">⏳</div>
            <div>
              <div className="db-summary-label">Pending Orders</div>
              <div className="db-summary-value">
                {assignedOrders.filter(o => o.status === 'Pending').length}
              </div>
            </div>
          </div>
          <div className="db-summary-card">
            <div className="db-summary-icon delivered">✅</div>
            <div>
              <div className="db-summary-label">Delivered Orders</div>
              <div className="db-summary-value">
                {assignedOrders.filter(o => o.status === 'Delivered').length}
              </div>
            </div>
          </div>
        </section>
        <section className="db-orders-section">
          <h2>Assigned Orders</h2>
          <div className="db-table-wrapper">
            <table className="db-orders-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Address</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {assignedOrders.map(order => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.address}</td>
                    <td>
                      <span className={`db-status ${order.status.toLowerCase()}`}>
                        {order.status}
                      </span>
                    </td>
                    <td>
                      {order.status === 'Pending' && (
                        <button
                          className="db-action-btn"
                          onClick={() => handleStatusChange(order.id, 'Delivered')}
                        >
                          Mark as Delivered
                        </button>
                      )}
                      {order.status === 'Delivered' && (
                        <span style={{ color: '#388e3c', fontWeight: 600 }}>✔</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DeliveryBoyDashboard;