import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/navbar.css";

function Layout() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavClick = () => {
        setIsNavOpen(false); // Close menu when a link is clicked
    };

    return (
        <>
            <nav className="navbar">
                <div className="nav-brand">
                    <Link to="/" onClick={handleNavClick}>AGRIMART</Link>
                </div>
                <div className={`nav-links ${isNavOpen ? 'active' : ''}`}>
                    <Link to="/" onClick={handleNavClick}>Home</Link>
                    <Link to="/about" onClick={handleNavClick}>About</Link>
                    <Link to="/contactus" onClick={handleNavClick}>Contact Us</Link>
                    <Link to="/login" onClick={handleNavClick}>Login</Link>
                </div>
                <button 
                    className={`nav-toggle ${isNavOpen ? 'active' : ''}`}
                    onClick={() => setIsNavOpen(!isNavOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Layout;