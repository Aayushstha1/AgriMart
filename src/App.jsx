import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "./App.css";
import Abouts from "./newroutes/Abouts";
import Contact from "./newroutes/Contact";
import Homes from './newroutes/Homes';
import Layouts from "./newroutes/Layouts";
import Login from "./newroutes/Login";
import ProductDetail from './newroutes/ProductDetail';
import ProductsList from './newroutes/ProductsList';
import Signup from "./newroutes/Signup";
import AdminDashboard from './newroutes/admin/AdminDashboard';
import CustomerDashboard from "./newroutes/customer/CustomerDashboard";
import DeliveryBoyDashboard from './newroutes/delivery/DeliveryBoyDashboard';

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
                    <Route path="/delivery-dashboard" element={<DeliveryBoyDashboard />} />
                    {/* Admin routes */}
                    <Route path="AdminDashboard" element={<AdminDashboard />} />
                    <Route path="admin/*" element={<AdminDashboard />} />
                    <Route path="/customer/dashboard" element={<CustomerDashboard />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;


