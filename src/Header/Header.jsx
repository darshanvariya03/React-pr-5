import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style.css'
import './header.css'

const Header = () => {
    return (
       <div className="col-lg-12 d-flex justify-content-center">
         <div className="header pt-4 pb-4 col-lg-9 georgia d-flex justify-content-between  align-item-center">
            <div className='col-lg-6 p-0 logo'>
                <h1>Wetwest</h1>
            </div>
            <div className='col-lg-6 verdana header-num d-flex justify-content-end'>
                <ul>
                    <li>
                        <span className='fw-bolder text-uppercase fs-6 header-text'>Placerat:</span>
                    </li>
                    <li>
                        <p className='fw-6'>+00 (123) 456 7890</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span className='fw-bolder text-uppercase fs-6 header-text'>Lobortis:</span>
                    </li>
                    <li>
                        <p className='fw-6'>+00 (123) 456 7890</p>
                    </li>
                </ul>
            </div>
        </div>
       </div>
    )
}

export default Header