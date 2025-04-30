import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../styles/navbar.css';

function Layout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-brand">
                    <Link to="/" className="logo">AgriMart</Link>
                    <button className="hamburger" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/contactus" className="nav-link">Contact</Link>
                    <Link to="/login" className="nav-link">Login</Link>
                </div>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;