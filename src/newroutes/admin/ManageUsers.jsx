import { useState } from 'react';
import '../../styles/Dashboard.css';

const ManageUsers = () => {
  const [activeTab, setActiveTab] = useState('customers');

  // Data: Only customers and delivery boys
  const users = {
    customers: [
    ],
    deliveryBoys: [
    ]
  };

  return (
    <div className="dashboard">
      <div className="main-content">
        <div className="header">
          <h1>Manage Users</h1>
        </div>
        <div className="user-management">
          <div className="tabs">
            <button 
              className={`tab-btn ${activeTab === 'customers' ? 'active' : ''}`}
              onClick={() => setActiveTab('customers')}
            >
              Customers
            </button>
            <button 
              className={`tab-btn ${activeTab === 'deliveryBoys' ? 'active' : ''}`}
              onClick={() => setActiveTab('deliveryBoys')}
            >
              Delivery Boys
            </button>
          </div>
          <div className="users-table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users[activeTab].map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <span className={`status ${user.status}`}>
                        {user.status}
                      </span>
                    </td>
                    <td>
                      <button className="action-btn edit">Edit</button>
                      <button className="action-btn delete">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;