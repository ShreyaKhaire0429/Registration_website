import React from 'react';
import '../Contact/Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import BrochureDownloadForm from './BrochureDownloadForm';


const HomeBrochureDownloadForm = () => {
    return (

        <section className="msm-mt-5 msm-contact-page-block" id="download-brochure">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">

                        {/* heading */}
                        <h1 class="display-6 fw-normal text-dark">Get Your Brochure</h1>
                        <p class=" text-dark mb-5 ">Submit the form to download the brochure and have our Academic Counselor reach out to you.</p>
                        {/* /heading */}

                        <h5 class="mb-4 text-dark">Connect with Us</h5>
                        {/* social icons */}
                        <ul class="social-menu mb-5">
                            <li class="social-btn facebook" tooltip="Facebook">
                                <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                            </li>
                            <li class="social-btn instagram" tooltip="Instagram">
                                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                            </li>
                            <li class="social-btn whatsapp" tooltip="WhatsApp">
                                <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
                            </li>
                            <li class="social-btn telegram" tooltip="Telegram">
                                <a href="#"><FontAwesomeIcon icon={faTelegram} /></a>
                            </li>
                        </ul>
                        {/* /social icons */}

                        {/* email address */}
                        <h5 class="text-dark">Email Address :</h5>
                        <h6 class="nav-item text-dark mb-5 msm-font-size"><span><FontAwesomeIcon icon={faEnvelope} className='pe-2 ' /></span>
                            swapnilkhare3@gmail.com</h6>
                        {/* /email address */}

                        {/* Call Us */}
                        <h5 class="text-dark">Call Us</h5>
                        <h6 class="nav-item mb-2 secondary msm-font-size">  <span><FontAwesomeIcon icon={faPhone} className='pe-2  ' /></span>
                            +91-9834888821</h6>

                        <h6 class="nav-item mb-2 secondary mb-5 msm-font-size"><span><FontAwesomeIcon icon={faPhone} className='pe-2' /></span>
                            +91-9970500727</h6>

                        {/* /Call Us */}

                        {/* Address */}
                        <h5 class="text-dark">Our Office Address</h5>
                        <p class="text-dark mb-5 msm-font-size"> <FontAwesomeIcon icon={faLocationDot} className='pe-2 ' />Flat No 101, Aqua habitat, shatabdi sq, Badil Kheda, Nagpur, Maharashtra 440027</p>
                        {/* /Address */}

                        <div className="row">
                        <div className="col-12"> <a href="https://g.page/r/CV9yiife7Cz9EB0/review" target="_blank" className="btn btn-success mb-3">Give me feedback </a></div>
                        <div className="col-12"><a href="https://goo.gl/maps/hnmrbQDteCWyCzPb8" target="_blank" className="btn btn-danger mb-5">Google map Location </a></div>
                        </div>


                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">

                        {/* contact form */}

                        <BrochureDownloadForm />
                        {/* contact form */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBrochureDownloadForm;
