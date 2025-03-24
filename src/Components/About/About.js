// File: src/components/About/About.js
import React from 'react';
import './About.scss';
import AboutOne from '../../assets/img/HeroAbout.jpg';
import AboutTwo from '../../assets/img/IMG_1114.JPG';
import AboutThree from '../../assets/img/img-11.jpg';

import { useTranslation } from 'react-i18next';
import NagpurBestClassesTwo from '../../assets/img/DSCF9180 1.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const About = () => {

  const { t } = useTranslation();

  return (
    <>
      {/* hero About bg block */}
      <div className="msm-about-block-section msm-mt-5">
        <div className="container text-center">

          {/* content */}
          <div className="px-5">
            <h1 className="display-6 fw-bold mb-3 text-white">
              About
              <span className="msm-text-success"> Me</span>
              <span className="msm-text-danger">Tta </span>
              Share Market
            </h1>
            <h5 className="lead text-white fs-6 mb-3 fw-bold">
              <i>Simplifying Trading & Investing for Everyone!</i>
            </h5>
            <p className="lead text-light fs-6 fw-light">
              Metta Share Market simplifies trading and investing with expert-led courses, covering technical analysis, intraday trading, and long-term investing to help you achieve financial independence.
            </p>
          </div>
          {/* /content */}
        </div>
      </div>
      {/* /hero About bg block */}

      {/* What We Offer */}
      <div className="container msm-what-we-offer-section">

        <h1 className="display-6 fw-normal text-orange mb-5 text-center"> What We Offer</h1>

        <div className="row">
          {/*  */}
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-4">
            <div className="msm-block text-center">
              <h1 className='mb-3'>📈</h1>
              <h4 className='fw-normal text-dark mb-3'>Stock Market Education & Strategies</h4>
              <h6 className='text-secondary fw-normal'>Beginner to Advanced Training</h6>
              <h6 className='text-secondary fw-normal'>Intraday & Swing Trading</h6>
              <h6 className='text-secondary fw-normal'>Futures & Options (F&O) Training</h6>
              <h6 className='text-secondary fw-normal'>Price Action & Technical Indicators</h6>
            </div>
          </div>
          {/*  */}
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-4">
            <div className="msm-block text-center">
              <h1 className='mb-3'>📊</h1>
              <h4 className='fw-normal text-dark mb-3'>Investment & Risk Management</h4>
              <h6 className='text-secondary fw-normal'>Portfolio Management Techniques</h6>
              <h6 className='text-secondary fw-normal'>Fundamental & Technical Analysis</h6>
              <h6 className='text-secondary fw-normal'>Wealth-Building Strategies</h6>
              <h6 className='text-secondary fw-normal'>Risk Management & Trading Psychology</h6>
            </div>
          </div>
          {/*  */}
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-4">
            <div className="msm-block text-center">
              <h1 className='mb-3 '>⚡</h1>
              <h4 className='fw-normal text-dark mb-3'>Market Tools & Insights</h4>
              <h6 className='text-secondary fw-normal'>Live Market Trading Sessions</h6>
              <h6 className='text-secondary fw-normal'>Charting Software Training</h6>
              <h6 className='text-secondary fw-normal'>Market News & Daily Analysis</h6>
              <h6 className='text-secondary fw-normal'>Technical Indicators & Trend Analysis</h6>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
      {/* /What We Offer */}

      <div className="container"><hr /></div>

      {/* Why choose section */}
      <div className="container msm-about-content-block ">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">

            <h4 className="fw-normal text-dark mb-3">Why Choose Us?</h4>

            <p className="text-dark mb-3"> <span className='text-green'>✔</span> <strong className='text-dark fw-normal'>Expert-Led Training – </strong>Learn from experienced traders and market professionals.
            </p>

            <p className="text-dark mb-3"> <span className='text-green'>✔</span> <strong className='text-dark fw-normal'>Practical Learning Approach – </strong>Hands-on exercises with real market examples.
            </p>

            <p className="text-dark mb-3"> <span className='text-green'>✔</span> <strong className='text-dark fw-normal'>Comprehensive Curriculum – </strong>Covers stocks, derivatives, and investment planning.
            </p>

            <p className="text-dark mb-3"> <span className='text-green'>✔</span> <strong className='text-dark fw-normal'>Market-Proven Strategies – </strong>Learn techniques used by successful investors.
            </p>

            <p className="text-dark mb-3"> <span className='text-green'>✔</span> <strong className='text-dark fw-normal'>Flexible Learning Options – </strong>Online & offline classes to suit your schedule.
            </p>

          </div>
          {/* image expand effect */}
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="msm-card">
              <p><img src={AboutOne} alt="About image" loading="lazy" /></p>
              <p><img src={AboutTwo} alt="About image" loading="lazy" /></p>
              <p><img src={AboutThree} alt="About image" loading="lazy" /></p>
            </div>
          </div>
          {/* /image expand effect */}
        </div>
      </div>
      {/* /Why choose section */}

      <div className="container"><hr /></div>

      {/* content section */}
      <div className="msm-about-us-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-6">

              <h4 className="fw-bold text-dark mb-3">Empower Your Future with Metta Financial Training</h4>

              <p className="text-dark mb-3">At Metta Financial Investment & Trading Training Institute, we believe that financial knowledge is the foundation of independence. Our mission is to shape aspiring traders and investors into confident market professionals through world-class education, hands-on training, and expert mentorship.
              </p>

              <li className="text-dark mb-2">✅ <strong className='text-dark'>12+ Years of Real-Market Expertise</strong> – Learn from seasoned traders who have successfully navigated the highs and lows of stock trading, forex, derivatives, and investment strategies.</li>

              <li className="text-dark mb-2">✅ <strong className='text-dark'>Practical Learning Approach</strong> – We focus on live market training, real-world strategies, and a mentorship-driven experience to ensure you gain actionable skills, not just theoretical knowledge.</li>

              <li className="text-dark mb-2">✅ <strong className='text-dark'>For All Skill Levels</strong> – Whether you're a beginner looking to start your trading journey or an experienced trader aiming to refine your strategy, Metta Financial equips you with the tools to succeed.</li>

              <p className="text-dark mb-3">Join us and take control of your financial future—because the best investment you can make is in yourself..</p>

              <h5 className='fw-bold text-orange mb-1'>Meet Your Mentor</h5>

              <p className='text-dark fw-normal mb-3'>Mr. Swapnil Khaire</p>

              <p className='text-dark mb-3'>A seasoned market expert with over 12 years of trading and investment experience, dedicated to guiding aspiring traders toward financial success.</p>

              <h6 className='text-orange fw-normal fw-bold'>Connect with him</h6>

              {/* social icons */}
              <ul className="social-menu">
                <li class="social-btn facebook" tooltip="Facebook">
                  <a href="https://m.facebook.com/sharemarketmetta/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                </li>
                <li class="social-btn instagram" tooltip="Instagram">
                  <a href="http://instagram.com/mettasharemarket" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                </li>
                <li class="social-btn whatsapp" tooltip="WhatsApp">
                  <a href="https://chat.whatsapp.com/FrE5T06HAZjEEqGFLMbQRA" target="_blank"><FontAwesomeIcon icon={faWhatsapp} /></a>
                </li>
                <li class="social-btn telegram" tooltip="Telegram">
                  <a href="https://t.me/joinchat/HrYYVxCqEvLAN3hc" target="_blank"><FontAwesomeIcon icon={faTelegram} /></a>
                </li>
              </ul>
              {/* /social icons */}
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="d-flex justify-content-center">
                <img src={NagpurBestClassesTwo} alt="About-image" loading="lazy" className='msm-about-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /content section  */}

      <div className="container"><hr /></div>

      {/* call to action */}
      <div className="msm-about-section">
        <div className="container text-center">
          <h1 className="display-6 fw-normal text-orange mb-4">Join the Metta Share Market Community!</h1>

          <p className='text-dark fw-normal'>Whether you're starting your trading journey or looking to refine your investment strategies, <br />Metta Share Market provides the knowledge and tools to help you succeed.</p>

          <p className='text-dark fw-normal mb-3'>🚀 Learn. Trade. Grow. Start your financial journey with us today!</p>

          <div className="d-flex justify-content-center"> <a href="/contact-us" className='btn-primary'>Contact Us</a></div>
        </div>
      </div>
      {/* /call to action */}

    </>
  );
};

export default About;
