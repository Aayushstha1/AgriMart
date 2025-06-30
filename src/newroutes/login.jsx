import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/login.css';

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        userType: 'farmer' // Default user type
    });
    const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
    const [attempted, setAttempted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setAttempted(false);
    };

    const moveButton = () => {
        if (!formData.email || !formData.password || !formData.userType) {
            const randomX = Math.random() * 200 - 100; // Random value between -100 and 100
            const randomY = Math.random() * 100 - 50; // Random value between -50 and 50
            setButtonPosition({ x: randomX, y: randomY });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setAttempted(true);

        if (!formData.email || !formData.password || !formData.userType) {
            moveButton();
            return;
        }

        setButtonPosition({ x: 0, y: 0 });
        // Simulate login and redirect based on userType
        if (formData.userType === 'dealer') {
            navigate('/products');
        } else if (formData.userType === 'admin') {
            navigate('/AdminDashboard');
        } else if (formData.userType === 'delivery') {
            navigate('/delivery-dashboard');
        } else {
            navigate('/');
        }
    };

    const buttonStyle = {
        transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px)`,
        transition: 'transform 0.3s ease-out'
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Welcome Back</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="userType">Login As</label>
                        <select
                            id="userType"
                            name="userType"
                            value={formData.userType}
                            onChange={handleChange}
                            className="user-type-select"
                        >
                            <option value="dealer">Customer</option>
                            <option value="admin">Admin</option>
                            <option value="delivery">Delivery Boy</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={attempted && !formData.email ? 'error' : ''}
                            placeholder="Enter your email"
                        />
                        {attempted && !formData.email && 
                            <span className="error-message">Email is required</span>
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={attempted && !formData.password ? 'error' : ''}
                            placeholder="Enter your password"
                        />
                        {attempted && !formData.password && 
                            <span className="error-message">Password is required</span>
                        }
                    </div>
                    <button 
                        type="submit" 
                        className="login-button"
                        style={buttonStyle}
                        onMouseEnter={moveButton}
                    >
                        Log In
                    </button>
                </form>
                <p className="signup-link">
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;