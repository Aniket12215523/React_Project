import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const ShirtsPage = () => {
  return (
    <div className="outfits-section">
      <h2>Shirt Collection</h2>
      <div className="outfits-grid">
        {products.shirts.map((shirt) => (
          <Link to={`/shirts/${shirt.id}`} key={shirt.id} className="outfit-card">
            <img src={shirt.image} alt={shirt.name} className="outfit-image" />
            <div className="outfit-details">
              <h3>{shirt.name}</h3>
              <p>{shirt.description}</p>
              <p><strong>₹{shirt.price}</strong></p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShirtsPage;
