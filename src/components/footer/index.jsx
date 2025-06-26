import React from 'react'
import { RightIcon } from '../../assets/icons'

function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-content">
        <div className="footer-item">
          <h3 className='footer-title'>Account</h3>
          <a className='footer-link' href="#">Log In</a>
          <a className='footer-link' href="#">Sign Up</a>
          <a className='footer-link' href="#">Redeem a Gift Card</a>
        </div>
        <div className="footer-item">
          <h3 className='footer-title'>Company</h3>
          <a className='footer-link' href="#">About</a>
          <a className='footer-link' href="#">Environmental Initiatives</a>
          <a className='footer-link' href="#">Factories</a>
          <a className='footer-link' href="#">DEI</a>
          <a className='footer-link' href="#">Careers</a>
          <a className='footer-link' href="#">International</a>
          <a className='footer-link' href="#">Accessibilitiy</a>
        </div>
        <div className="footer-item">
          <h3 className='footer-title'>Get Help</h3>
          <a className='footer-link' href="#">Help Center</a>
          <a className='footer-link' href="#">Return Policy</a>
          <a className='footer-link' href="#">Shipping Info</a>
          <a className='footer-link' href="#">Bulk Orders</a>

        </div>
        <div className="footer-item">
          <h3 className='footer-title'>Connect</h3>
          <a className='footer-link' href="#">Facebook</a>
          <a className='footer-link' href="#">Instagram</a>
          <a className='footer-link' href="#">Twitter</a>
          <a className='footer-link' href="#">Affiliates</a>
          <a className='footer-link' href="#">Our Stores</a>
        </div>
        <div className="footer-signup">
          <h1 className='footer-signup__title'>Sign up to receive 15% off your first order.</h1>
          <form className='footer-signup__form'>
            <input title='Email Address' className='footer-signup__input' placeholder='Email Address' type="email" />
            <button className='footer-signup__button' type='submit'><RightIcon /></button>
          </form>
          <p className='footer-signup__subtitle'>By providing your email address, you agree to our Privacy Policy and Terms of Service.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer