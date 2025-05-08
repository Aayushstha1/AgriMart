import { useState } from 'react';
import '../styles/login.css';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
    const [attempted, setAttempted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setAttempted(false); // Reset attempted state when user types
    };

    const moveButton = () => {
        const randomX = Math.random() * 100 - 50; // Random value between -50 and 50
        const randomY = Math.random() * 100 - 50; // Random value between -50 and 50
        setButtonPosition({ x: randomX, y: randomY });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setAttempted(true);

        if (!formData.email || !formData.password) {
            moveButton();
            return;
        }

        // If validation passes, reset button position and proceed with login
        setButtonPosition({ x: 0, y: 0 });
        console.log('Login attempt with:', formData);
    };

    const buttonStyle = {
        transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px)`,
        transition: 'transform 0.2s ease-out'
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Welcome Back</h2>
                <form onSubmit={handleSubmit}>
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
                    >
                        Log In
                    </button>
                </form>
                <p className="signup-link">
                    Don't have an account? <a href="/signup">Sign up</a>
                </p>
            </div>
        </div>
    );
}

export default Login;