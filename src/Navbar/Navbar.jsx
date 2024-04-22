import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className="col-lg-12 navbar d-flex justify-content-center">
      <div className="col-lg-9 verdana d-flex justify-content-between  align-item-center">
        <ul className='navbar-menu d-flex justify-content-between'>
          <li>
            <a href="#" className='active'>HOME</a>
          </li>
          <li>
            <a href="#">PAGES</a>
          </li>
          <li>
            <a href="#">DROPDOWN</a>
          </li>
          <li>
            <a href="#">LINE TEXT</a>
          </li>
          <li>
            <a href="#">LINE TEXT</a>
          </li>
          <li>
            <a href="#">LONG LINE TEXT</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar