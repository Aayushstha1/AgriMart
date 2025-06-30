import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Homes from './newroutes/Homes';
import ProductDetail from './newroutes/ProductDetail';

import "./App.css";
import AdminDashboard from './newroutes/admin/AdminDashboard';
import ManageUsers from './newroutes/admin/ManageUsers';

import Abouts from "./newroutes/Abouts";
import Contact from "./newroutes/Contact";
import Layouts from "./newroutes/Layouts";
import Login from "./newroutes/Login";
import Signup from "./newroutes/Signup";

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
                    
                    {/* Admin routes */}
                    <Route path="AdminDashboard" element={<AdminDashboard />} />
                    <Route path="admin/*" element={<AdminDashboard />} />
                    <Route path="admin/manage-users" element={<ManageUsers />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;


