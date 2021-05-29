import React from "react";
import { Button } from "./Button";
import {Link} from 'react-router-dom'
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the adventure newsletter to receive our best vaction deals.
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form className="footer-email-form">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            ></input>
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to="/"> How it works</Link>
            <Link to="/"> Testamonials</Link>
            <Link to="/"> References</Link>
            <Link to="/"> About me</Link>  
          </div>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to="/"> How it works</Link>
            <Link to="/"> Testamonials</Link>
            <Link to="/"> References</Link>
            <Link to="/"> About me</Link>  
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/"> How it works</Link>
            <Link to="/"> Testamonials</Link>
            <Link to="/"> References</Link>
            <Link to="/"> About me</Link>  
          </div>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to="/"> How it works</Link>
            <Link to="/"> Testamonials</Link>
            <Link to="/"> References</Link>
            <Link to="/"> About me</Link>  
          </div>
        </div>
      </div>
      <section className='social-media'>
          <div className='social-media-wrap'>
              <div className='footer-logo'>
                  <Link to='/' className='social-logo'>
                        Cam Soulsby <i className='fab fa-typo3'/>
                  </Link>
              </div>
              <small className='website-rights'> Cam Soulsby © 2021</small>
              <div className='social-icons'>
                  <Link className='social-icon-link facebook'
                  to='/'
                  target="_blank"
                  aria-label='Facebook'
                  >
                      <i className='fab fa-facebook-f'/>
                  </Link>
                  <Link className='social-icon-link instagram'
                  to='/'
                  target="_blank"
                  aria-label='Instagram'
                  >
                      <i className='fab fa-instagram'/>
                  </Link>
                  <Link className='social-icon-link twitter'
                  to='/'
                  target="_blank"
                  aria-label='Twitter'
                  >
                      <i className='fab fa-twitter'/>
                  </Link>
              </div>
          </div>
      </section>
    </div>
  );
}

export default Footer;
