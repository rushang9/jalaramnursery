// Navbar.jsx
import React from 'react';
import './Navbar.css'; // Optional for styling
import { Link } from 'react-router-dom';


const NavigationBar = () => {
  return (
    <>
    <nav className='navbar'>

    <Link to='/'><li>home</li></Link>
    <Link to='/About'><li>About</li></Link>
    <Link to='/Login'><li>Login</li></Link>
      <li><a href='https://www.facebook.com/profile.php?id=100063928035416' target='blank'>fb</a></li>
    </nav>
    </>  );
};

export default NavigationBar;
