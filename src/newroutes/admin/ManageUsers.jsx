import { useState } from 'react';
import '../../styles/Dashboard.css';

const ManageUsers = () => {
  const [activeTab, setActiveTab] = useState('farmers');

  //  Data ..........................
  const users = {
    farmers: [
      { id: 1, name: 'Farmer 1', email: 'farmer1@example.com', status: 'active' },
      { id: 2, name: 'Farmer 2', email: 'farmer2@example.com', status: 'inactive' },
    ],
    dealers: [
      { id: 1, name: 'Dealer 1', email: 'dealer1@example.com', status: 'active' },
      { id: 2, name: 'Dealer 2', email: 'dealer2@example.com', status: 'active' },
    ],
    deliveryBoys: [
      { id: 1, name: 'Delivery Boy 1', email: 'delivery1@example.com', status: 'active' },
      { id: 2, name: 'Delivery Boy 2', email: 'delivery2@example.com', status: 'inactive' },
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
              className={`tab-btn ${activeTab === 'farmers' ? 'active' : ''}`}
              onClick={() => setActiveTab('farmers')}
            >
              Farmers
            </button>
            <button 
              className={`tab-btn ${activeTab === 'dealers' ? 'active' : ''}`}
              onClick={() => setActiveTab('dealers')}
            >
              Dealers
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