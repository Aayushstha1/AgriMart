import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Homes() {
    return (
        <div className="home-container">
            <section className="hero-section">
                <h1 className="hero-title">Welcome to AGRIMART</h1>
                <p className="hero-subtitle">
                    Your one-stop destination for fresh, organic produce directly from local farmers.
                    Experience the best of agriculture with quality and trust.
                </p>
                <Link to="/products" className="cta-button">
                    Explore Products..
                </Link>
            </section>

            <section className="features-section">
                <div className="feature-card">
                    <div className="feature-icon">🌾</div>
                    <h2 className="feature-title">Fresh Products</h2>
                    <p className="feature-description">
                        Direct from farms to your doorstep, ensuring the freshest agricultural products.
                    </p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">👨‍🌾</div>
                    <h2 className="feature-title">Support Farmers</h2>
                    <p className="feature-description">
                        Connect directly with local farmers and support sustainable agriculture.
                    </p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">🚚</div>
                    <h2 className="feature-title">Fast Delivery</h2>
                    <p className="feature-description">
                        Quick and reliable delivery ensuring your products reach you in perfect condition.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Homes;