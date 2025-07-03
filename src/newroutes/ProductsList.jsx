import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import barleyImg from '../assets/barley.jpg';
import basmatiImg from '../assets/basmati.jpg';
import chickpeasImg from '../assets/chickpeas.jpg';
import cornImg from '../assets/corn.jpg';
import milletImg from '../assets/millet.jpg';
import moongdalImg from '../assets/Moong.jpg';
import oatsImg from '../assets/oats.jpg';
import riceImg from '../assets/rice-field.jpg';
import sorghumImg from '../assets/sorghum.jpg';
import wheatImg from '../assets/wheat.jpg';
import './ProductsList.css';

const sampleProducts = [
	{
		id: 1,
		name: 'Wheat',
		price: 1200,
		image: wheatImg,
		description: 'High quality wheat, perfect for baking and cooking.',
		category: 'Plants',
	},
	{
		id: 2,
		name: 'Rice',
		price: 1500,
		image: riceImg,
		description: 'Fresh rice directly from the farm, rich in nutrients.',
		category: 'Plants',
	},
	{
		id: 3,
		name: 'Corn',
		price: 900,
		image: cornImg,
		description: 'Sweet and juicy corn, great for snacks and meals.',
		category: 'Vegetables',
	},
	{
		id: 4,
		name: 'Barley',
		price: 1100,
		image: barleyImg,
		description: 'Nutritious barley, ideal for soups and salads.',
		category: 'Plants',
	},
	{
		id: 5,
		name: 'Oats',
		price: 1300,
		image: oatsImg,
		description: 'Healthy oats, perfect for breakfast and baking.',
		category: 'Plants',
	},
	{
		id: 6,
		name: 'Millet',
		price: 1000,
		image: milletImg,
		description: 'Gluten-free millet, great for porridge and rotis.',
		category: 'Plants',
	},
	{
		id: 7,
		name: 'Sorghum',
		price: 950,
		image: sorghumImg,
		description: 'Rich in fiber, good for healthy diets.',
		category: 'Plants',
	},
	{
		id: 8,
		name: 'Basmati Rice',
		price: 1800,
		image: basmatiImg,
		description: 'Premium long-grain basmati rice.',
		category: 'Plants',
	},
	{
		id: 9,
		name: 'Moong Dal',
		price: 1400,
		image: moongdalImg,
		description: 'Protein-rich moong dal for healthy meals.',
		category: 'Herbs',
	},
	{
		id: 10,
		name: 'Chickpeas',
		price: 1250,
		image: chickpeasImg,
		description: 'Fresh chickpeas, perfect for curries and salads.',
		category: 'Vegetables',
	},
];

function ProductsList({ onProductClick }) {
	const navigate = useNavigate();
	const [favourites, setFavourites] = useState([]);
	const [category, setCategory] = useState('All');

	const handleAddToCart = (product, e) => {
		e.stopPropagation();
		if (window.confirm(`Do you want to add "${product.name}" to cart?`)) {
			alert(`${product.name} added to cart!`);
		}
	};

	const handleAddToFavourite = (product, e) => {
		e.stopPropagation();
		if (favourites.includes(product.id)) return;
		if (window.confirm(`Do you want to add "${product.name}" to favourites?`)) {
			setFavourites([...favourites, product.id]);
			alert(`${product.name} added to favourites!`);
		}
	};

	// Filter products by category
	const filteredProducts =
		category === 'All'
			? sampleProducts
			: sampleProducts.filter((product) => product.category === category);

	return (
		<div>
			<h2
				style={{
					textAlign: 'center',
					color: '#388e3c',
					marginBottom: '18px',
					fontWeight: 'bold',
					letterSpacing: '1px',
				}}
			>
				This is our sample product
			</h2>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					marginBottom: 24,
				}}
			>
				<select
					value={category}
					onChange={(e) => setCategory(e.target.value)}
					style={{
						padding: '8px 16px',
						borderRadius: 8,
						border: '1.5px solid #388e3c',
						fontSize: 16,
						color: '#388e3c',
						fontWeight: 600,
						outline: 'none',
						cursor: 'pointer',
					}}
				>
					<option value="All">All</option>
					<option value="Herbs">Herbs</option>
					<option value="Plants">Plants</option>
					<option value="Vegetables">Vegetables</option>
				</select>
			</div>
			<div className="products-list">
				{filteredProducts.length === 0 ? (
					<div
						style={{
							textAlign: 'center',
							color: '#888',
							width: '100%',
						}}
					>
						No products found in this category.
					</div>
				) : (
					filteredProducts.map((product) => (
						<div
							key={product.id}
							className="product-card"
							onClick={() =>
								onProductClick
									? onProductClick(product)
									: navigate(`/product/${product.id}`)
							}
						>
							<img
								src={product.image}
								alt={product.name}
								className="product-image"
							/>
							<h3 className="product-title">{product.name}</h3>
							<p className="product-price">Rs{product.price}</p>
							<div className="product-buttons">
								<button
									className="cart-btn"
									onClick={(e) => handleAddToCart(product, e)}
									title="Add to Cart"
								>
									🛒
								</button>
								<button
									className={`fav-btn${
										favourites.includes(product.id)
											? ' fav-btn-active'
											: ''
									}`}
									onClick={(e) => handleAddToFavourite(product, e)}
									title="Add to Favourite"
								>
									{favourites.includes(product.id) ? '❤️' : '🤍'}
								</button>
								<button
									className="buy-btn"
									onClick={(e) => {
										e.stopPropagation();
										if (window.confirm(`Do you want to buy "${product.name}" now?`)) {
											alert(`Proceeding to buy ${product.name}!`);
											// You can add your buy logic here
										}
									}}
									title="Buy Now"
								>
									🛍️ Buy
								</button>
							</div>
						</div>
					))
				)}
			</div>
		</div>
	);
}

export default ProductsList;