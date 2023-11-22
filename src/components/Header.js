import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
      <div className='d-flex justify-content-between align-items-center py-2 px-3 fixed-top'>
        <div>Hello</div>
          <div className='d-flex pe-3'>
                <Link to="/">
                  <p className='mx-2 mb-0'>Home</p>
                </Link> 
                <Link to="/about">
                  <p className='mx-2 mb-0'>About</p>
                </Link>              
                <Link to="/contact">
                  <p className='mx-2 mb-0'>Contact</p>
                </Link>
                <Link to="/cart">
                  <p className='mx-2 mb-0'>Cart</p>
                </Link>  
          </div>
      </div>
  )
}

export default Header