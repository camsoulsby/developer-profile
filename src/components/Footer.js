import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Subscribe below to receive my newsletter.
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
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Testimonials</h2>
            <Link> Read Testimonials</Link>
          </div>
          <div className="footer-link-items">
            <h2>Awards</h2>
            <Link> View Awards</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>References</h2>
            <Link> Request References</Link>
          </div>
          <div className="footer-link-items">
            <h2>Email</h2>
            <Link to="/contact"> cameron.soulsby@gmail.com</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights"> Cam Soulsby © 2021</small>
          <div className="social-icons">
            <Link className="social-icon-link facebook" aria-label="Facebook">
              <i className="fab fa-facebook-f" />
            </Link>
            <Link className="social-icon-link instagram" aria-label="Instagram">
              <i className="fab fa-instagram" />
            </Link>
            <Link className="social-icon-link twitter" aria-label="Twitter">
              <i className="fab fa-twitter" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
