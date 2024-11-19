import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './components/ProductList';
import FeaturedProductsPage from './pages/FeaturedProducts';
import BestSeller from './pages/BestSeller';
import AllProducts from './pages/AllProducts';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Jeans from './pages/Jeans';
import Tshirts from './pages/Tshirts';
import Shirts from './pages/Shirts';
import Jackets from './pages/Jackets';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/jeans" element={<Jeans />} />
      <Route path="/tshirts" element={<Tshirts />} />
      <Route path="/shirts" element={<Shirts />} />
      <Route path="/jackets" element={<Jackets />} />
      <Route path="/featured-products" element={<FeaturedProductsPage />} />
      <Route path="/best-sellers" element={<BestSeller />} />
      <Route path="/all-products" element={<AllProducts />} />
      <Route path="/cart" element={<Cart />} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/:category/:id" element={<ProductDetail />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default AppRoutes;
