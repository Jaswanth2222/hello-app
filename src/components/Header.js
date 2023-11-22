import React from 'react'

const Header = () => {
  return (
      <div className='d-flex justify-content-between align-items-center py-2 px-3 fixed-top'>
        <div>Hello</div>
          <div className='d-flex pe-3'>
            <p className='mx-2 mb-0'>Home</p>
            <p className='mx-2 mb-0'>About</p>
            <p className='mx-2 mb-0'>Contact</p>
            <p className='mx-2 mb-0'>Cart</p>
          </div>
      </div>
  )
}

export default Header