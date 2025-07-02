import { Route, Routes } from 'react-router-dom';
// import CustomerDashboard from '../newroutes/customer/Customerdashboard';

function App() {
  return (
    <Routes>
      <Route path="/customer /dashboard" element={<CustomerDashboard />} />
      {/* Add other routes here */}
    </Routes>
  );
}

export default App;