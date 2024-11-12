import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const JacketsPage = () => {
  return (
    <div className="outfits-section">
      <h2>Jacket Collection</h2>
      <div className="outfits-grid">
        {products.jackets.map((jacket) => (
          <Link to={`/jackets/${jacket.id}`} key={jacket.id} className="outfit-card">
            <img src={jacket.image} alt={jacket.name} className="outfit-image" />
            <div className="outfit-details">
              <h3>{jacket.name}</h3>
              <p>{jacket.description}</p>
              <p><strong>${jacket.price}</strong></p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default JacketsPage;
