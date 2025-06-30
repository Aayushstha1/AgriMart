
const assignedOrders = [
  { id: 1, customer: 'Amit Sharma', address: '123 Main St', status: 'Pending' },
  { id: 2, customer: 'Priya Singh', address: '456 Market Rd', status: 'Delivered' },
];

const DeliveryBoyDashboard = () => {
  return (
    <div className="dashboard">
      <div className="header">
        <h1>Delivery Boy Dashboard</h1>
        <div className="profile">
          <span>Welcome, Delivery Boy</span>
          <button className="logout-btn">Logout</button>
        </div>
      </div>
      <div className="orders-section">
        <h2>Assigned Orders</h2>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {assignedOrders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.address}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeliveryBoyDashboard;