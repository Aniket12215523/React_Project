import React from 'react';
import { Link } from 'react-router-dom';
import './MenOutfits.css';

const outfits = [
  {
    id: 1,
    name: "Stylish Jeans",
    image: require('../images/mens-outfits/image4.png'),
    description: "Comfortable and stylish jeans for everyday wear.",
    route: "/jeans" 
  },
  {
    id: 2,
    name: "Casual T-shirts",
    image: require('../images/tshirts/tshirt1.jpg'),
    description: "A cool casual t-shirt for summer days.",
    route: "/tshirts" 
  },
  {
    id: 3,
    name: "Stylish Shirts",
    image: require('../images/shirts/shirt1.png'),
    description: "A formal shirt for office and formal events.",
    route: "/shirts" 
  },
  {
    id: 4,
    name: "Jackets",
    image: require('../images/jackets/jacket1.png'),
    description: "A classy leather jacket to keep you warm and stylish.",
    route: "/jackets" 
  }
];

const FeaturedOutfits = () => {
  return (
    <div className="outfits-section">
      <h2>Men's Outfits</h2>
      <div className="outfits-grid">
        {outfits.map(outfit => (
          <Link to={outfit.route} key={outfit.id} className="outfit-card">
            <img src={outfit.image} alt={outfit.name} className="outfit-image" />
            <div className="outfit-details">
              <h3>{outfit.name}</h3>
              <p>{outfit.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedOutfits;
