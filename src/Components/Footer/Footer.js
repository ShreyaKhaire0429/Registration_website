import React from 'react';
import './Footer.scss';
import mettaLogo from '../../assets/img/metta-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import GoogleRating from '../../assets/img/google-rating.png';
import JustDialRating from '../../assets/img/justdialrating.png';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div class="row pt-5 pb-3">

          {/* site logo & des */}
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 my-3">
            <a href="/" className="d-flex align-items-center mb-3 text-decoration-none">
              <img src={mettaLogo} className="img-fluid msm-logo-images" alt="MeTta Financial Investment & Trading Training Institute" loading="lazy" />
            </a>
            <p className="text-secondary msm-p">Master the art of investing and trading with expert-led training. Develop the skills to navigate financial markets confidently and create lasting wealth!</p>
          </div>
          {/* /site logo & des */}

          {/* Quick Links */}
          <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4  my-3">
            <h5 className='text-white mb-4'>Quick Links</h5>
            <div className="d-flex msm-side-space">
              <ul class="nav flex-column">
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-secondary">Home</a></li>
                <li className="nav-item mb-2"><a href="/about-us" className="nav-link p-0 text-secondary">About Us</a></li>
                <li className="nav-item mb-2"><a href="/contact-us" className="nav-link p-0 text-secondary">Contact us</a></li>
                <li className="nav-item mb-2"><a href="/testimonial" className="nav-link p-0 text-secondary">Testimonial</a></li>
                <li className="nav-item mb-2"><a href="/gallery" className="nav-link p-0 text-secondary">Gallery</a></li>
              </ul>
              <ul className="nav flex-column">

                {/* Learning Highlights */}
                <li className="nav-item mb-2">
                  <Link
                    to="/"
                    className="nav-link p-0 text-secondary nav-item"
                    onClick={() => setTimeout(() => window.location.hash = "learning-highlights", 100)}
                  >
                    Learning Highlights
                  </Link>
                </li>
                {/* /Learning Highlights */}

                {/* FAQ */}
                <li className="nav-item mb-2">
                  <Link
                    to="/"
                    className="nav-link p-0 text-secondary nav-item"
                    onClick={() => setTimeout(() => window.location.hash = "faq", 100)}
                  >
                    FAQ
                  </Link>
                </li>
                {/* /FAQ */}

                <li className="nav-item mb-2"><a href="/refund-policy" className="nav-link p-0 text-secondary">Refund Policy</a></li>

                {/* Download Brochure */}
                <li className="nav-item mb-2">
                  <Link
                    to="/"
                    className="nav-link p-0 text-secondary nav-item"
                    onClick={() => setTimeout(() => window.location.hash = "download-brochure", 100)}
                  >
                    Download Brochure
                  </Link>
                </li>
                {/* /Download Brochure */}

              </ul>
            </div>

          </div>
          {/* /Quick Links */}

          {/* Contact Us */}
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 my-3">
            <h5 className='text-white mb-4'>Contact Us</h5>
            <ul class="nav flex-column">

              <li className="nav-item mb-2 text-secondary"><span><FontAwesomeIcon icon={faEnvelope} className='pe-2 text-orange' /></span>
                swapnilkhare3@gmail.com</li>

              <li className="nav-item mb-2 text-secondary">  <span><FontAwesomeIcon icon={faPhone} className='pe-2 text-orange' /></span>
                +91-9834888821</li>

              <li className="nav-item mb-2 text-secondary"><span><FontAwesomeIcon icon={faPhone} className='pe-2 text-orange' /></span>
                +91-9970500727</li>
            </ul>
          </div>
          {/* /Contact Us */}

          {/* rating image */}
          <div className="col-12 col-md-12 my-4">
            <hr className='msm-border-top py-3' />
            <div className="msm-image">
              <a target="_blank" href="https://g.co/kgs/YtHMjr4"> <img src={GoogleRating} className="img-fluid google-rating" alt="GoogleRating" loading="lazy" /></a>
              <a href="https://jsdl.in/DT-45YGFGEEKHF" target="_blank"><img src={JustDialRating} className="img-fluid google-rating" alt="GoogleRating" loading="lazy" /></a>
            </div>

            <div className="text-secondary mt-4 text-center msm-p">
              <p>MeTta Financial Investment & Trading Training Institute | Stock Market Training | Trading Strategies | Investment Planning | Technical Analysis | Fundamental Analysis | Financial Education | Intraday Trading | Equity Market | Portfolio Management</p>
            </div>

          </div>
          {/* /rating image */}
        </div>
        <hr className='msm-border-top' />

        {/* copy right */}
        <div className="text-center py-4">
          <small className='text-secondary'>© Copyrights 2025 - 2026. <br />Metta Financial Investment & Trading Trainning Institute.All Rights Reserved.</small>
        </div>
        {/* /copy right */}

      </div>
    </footer>
  );
};

export default Footer;