import React from 'react';
import {Link} from 'react-router-dom';
import {useAuth} from '../AuthContext';
import "./Header.css";

const Header=()=>{
  const {user, logout} = useAuth();

  return (
    <header className='header'>
      <h1>Sapna Sopie</h1>
      <nav>
        <ul>
          <li className='nav-links'><Link to="/">Home</Link></li>
          <li className='nav-links'> <Link to="/featured-products">Featured Products</Link> </li>
          <li className='nav-links'><Link to="/cart">Cart</Link></li>
          {user ? (
            <>
              <li><span>Welcome, {user.username}</span></li>
              <li><button className="logout-button" onClick={logout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className='nav-links'><Link to="/login">Login</Link></li>
              <li className='nav-links'><Link to="/register">Register</Link></li> 
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
