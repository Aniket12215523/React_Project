import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const JeansPage = () => {
  return (
    <div className="outfits-section">
      <h2>Jeans Collection</h2>
      <div className="outfits-grid">
        {products.jeans.map((jean) => (
          <Link to={`/jeans/${jean.id}`} key={jean.id} className="outfit-card">
            <img src={jean.image} alt={jean.name} className="outfit-image" />
            <div className="outfit-details">
              <h3>{jean.name}</h3>
              <p>{jean.description}</p>
              <p><strong>${jean.price}</strong></p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default JeansPage;
