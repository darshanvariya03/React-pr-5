import React from 'react'
import './home.css'
import banner from '../assets/img/background-01.jpg';

const Home = () => {
    return (
        <div className="col-lg-12 banner d-flex justify-content-center">
            <div className="text-light pt-4 pb-4 col-lg-9 georgia d-flex justify-content-between  align-item-center">
                <div className="banner-contant p-5">
                    <p className='fst-italic pt-2 pb-2'>Purus Donec Mi Tellus Suscipit Eget</p>
                    <h2 className='fst-italic pb-4'>Urna A Egestas Etiam</h2>
                    <span className='verdana'>Lacinia velit at ipsum commodo tincidunt donec condimentum ligula ultricies dictum.</span>
                    <div className="banner-btn col-lg-6 verdana pt-5 d-flex">
                        <button className='text-uppercase btn-1'>Ullamcorper</button>
                        <button className='text-uppercase btn-2'>Accumsan</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home