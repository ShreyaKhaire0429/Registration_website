import React, { useState, useEffect } from 'react';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// pages
import HeroSection from './HeroSection';
import HeroGallery from './HeroGallery';
import TestimonialSlider from './TestimonialSlider';
import BrochureDownloadForm from './BrochureDownloadForm';
import HomeBrochureDownloadForm from './HomeBrochureDownloadForm';
import HomeAbout from './HomeAbout';
import HomeWhyChoose from './HomeWhyChoose';
import Accordion from './Accordion';
import NagpurBestClasses from './NagpurBestClasses';
import CallToAction from './CallToAction';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";


// Import Bootstrap's Modal
import { Modal } from 'bootstrap';

const Home = () => {


  const [showBrochureForm, setShowBrochureForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBrochureForm(true);

      const modalElement = document.getElementById('brochureModal');
      if (modalElement) {
        const modal = new Modal(modalElement);
        modal.show();
      }
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  
  return (
    <div className="home">
      {/* hero */}
      <HeroSection />
      {/* /hero */}
  
      {/* About */}
      <HomeAbout />
      {/* /About */}

      {/* Why choose section */}
      <HomeWhyChoose />
      {/* /Why choose section */}

      {/* best nagpur classes */}
      < NagpurBestClasses />
      {/* /best nagpur classes */}

      {/* Gallery */}
      <HeroGallery />
      {/* /Gallery */}

      {/* Testimonial */}
      <TestimonialSlider />
      {/* /Testimonial */}

      {/* Brochure Form */}
      <div className="msm-home-form">
        <HomeBrochureDownloadForm />
      </div>
      {/* /Brochure Form */}

      {/* Bootstrap Modal - Auto Shows After 15 sec */}
      <div className="modal fade h-100 msm-content-modal " id="brochureModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title ">Brochure Download</h5>
              <p className='text-secondary'></p>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {showBrochureForm ? <BrochureDownloadForm /> : <p>Loading...</p>}
            </div>
          </div>
        </div>
      </div>
      {/* Bootstrap Modal */}

      {/* FAQ */}
      <Accordion/>
      {/* /FAQ */}

      {/* call to action */}
      <CallToAction />
      {/* /call to action */}

      {/* whatsapp */}
      <a className="msm-whatsapp-btn" href="https://wa.me/919834888821" target="_blank"> <FontAwesomeIcon icon={faWhatsapp} className="msm-whatsapp-icon" /></a>
      {/* /whatsapp */}
    </div>
  );
};

export default Home;
