export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./newroutes/about";
import Contactus from "./newroutes/Contactus";
import Home from "./newroutes/home";
import Layout from "./newroutes/layout";

          
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {/* Child Routes */}
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contactus" element={<Contactus />} />
                    <Route path="login" element={<login />} />
                   
                </Route>
            </Routes>
        </BrowserRouter>
    );
}


