import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav className='nav-links'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
                <Link to='/registration'>Registration</Link>
            </li>
            <li>
                <Link to='/donation'>Donation</Link>
            </li>
            <li>
                <Link to='/internship'>Internship</Link>
            </li>
          </ul>
        </nav>
      );
}

export default Navbar