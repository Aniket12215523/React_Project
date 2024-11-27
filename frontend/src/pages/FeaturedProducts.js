import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import './FeaturedProducts.css';

const FeaturedProduct = () => {
  const featuredProducts = [
    ...products.jeans.map(product => ({ ...product, category: 'jeans' })),
    ...products.tshirts.map(product => ({ ...product, category: 'tshirts' })),
    ...products.shirts.map(product => ({ ...product, category: 'shirts' })),
    ...products.jackets.map(product => ({ ...product, category: 'jackets' })),
  ].filter(product => product.isFeatured);

  return (
    <div className="featured-products-page">
      <h2>Featured Products</h2>
      <div className="featured-products-grid">
        {featuredProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.category}/${product.id}`}
            className="featured-product-card"
          >
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">₹{product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;


// backend code

// import React, { useEffect, useState } from 'react';
// import { fetchFeaturedProducts } from '../services/productService'; 

// const FeaturedProduct = () => {
//   const [featuredProducts, setFeaturedProducts] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const loadFeaturedProducts = async () => {
//       try {
//         const data = await fetchFeaturedProducts();
//         setFeaturedProducts(data);
//       } catch (err) {
//         setError('Failed to load featured products');
//         console.error(err);
//       }
//     };

//     loadFeaturedProducts();
//   }, []);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h2>Featured Products</h2>
//       {featuredProducts.map((product) => (
//         <div key={product._id}>
//           <h3>{product.name}</h3>
//           <p>{product.description}</p>
//           <p>Price: ${product.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FeaturedProduct;
