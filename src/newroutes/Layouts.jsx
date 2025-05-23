import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../styles/navbar.css';

function Layouts() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu when clicking outside
    useEffect(() => {
        const closeMenu = (e) => {
            if (isMenuOpen && !e.target.closest('.navbar')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', closeMenu);
        return () => document.removeEventListener('click', closeMenu);
    }, [isMenuOpen]);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    return (
        <div className="layout-container">
            <nav className="navbar">
                <div className="navbar-brand">
                    <Link to="/" className="logo">AgriMart</Link>
                </div>
                <button 
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/contactus" className="nav-link">Contact</Link>
                    <Link to="../AdminDashboard" className="nav-link">Admin</Link>
                    <Link to="/login" className="nav-link">Login</Link>
                </div>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Layouts;