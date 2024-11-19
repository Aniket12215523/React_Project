import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const TshirtsPage = () => {
  return (
    <div className="outfits-section">
      <h2>T-shirt Collection</h2>
      <div className="outfits-grid">
        {products.tshirts.map((tshirt) => (
          <Link to={`/tshirts/${tshirt.id}`} key={tshirt.id} className="outfit-card">
            <img src={tshirt.image} alt={tshirt.name} className="outfit-image" />
            <div className="outfit-details">
              <h3>{tshirt.name}</h3>
              <p>{tshirt.description}</p>
              <p><strong>₹{tshirt.price}</strong></p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TshirtsPage;
