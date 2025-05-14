import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./newroutes/about";
import Contactus from "./newroutes/contactus";
import Home from "./newroutes/home";
import Layout from "./newroutes/layout";
import admin from "./newroutes/admin/AdminDashboard";
import Login from "./newroutes/login";
import Signup from "./newroutes/signup";  

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contactus" element={<Contactus />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;


