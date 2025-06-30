import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Homes from './newroutes/Homes';
import ProductDetail from './newroutes/ProductDetail';
import ProductsList from './newroutes/ProductsList';

import "./App.css";
import AdminDashboard from './newroutes/admin/AdminDashboard';
import ManageUsers from './newroutes/admin/ManageUsers';

import Abouts from "./newroutes/Abouts";
import Contact from "./newroutes/Contact";
import Layouts from "./newroutes/Layouts";
import Login from "./newroutes/Login";
import Signup from "./newroutes/Signup";
import CustomerDashboard from './newroutes/customer/Customerdashboard';

function App() {
    return (
        <Router>
            <Routes> 
                <Route path="/" element={<Layouts />}>
                    <Route index element={<Homes />} />
                    <Route path="about" element={<Abouts/>} />
                    <Route path="contactus" element={<Contact/>} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="product/:id" element={<ProductDetail />} />
                    <Route path="/products" element={<ProductsList />} />
                    
                    {/* Admin routes */}
                    <Route path="AdminDashboard" element={<AdminDashboard />} />
                    <Route path="admin/*" element={<AdminDashboard />} />
                    <Route path="admin/manage-users" element={<ManageUsers />} />
                    <Route path="/customer/dashboard" element={<CustomerDashboard />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;


