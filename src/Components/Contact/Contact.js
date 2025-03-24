import React, { useState } from "react";
import './Contact.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";



const ContactForm = () => {
  const [formData, setFormData] = useState({
    FullName: "",
    Email: "",
    Phone: "",
    Subject: "",
    Message: "",
    Address: "",
    City: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { FullName, Email, Phone, Subject, Message, Address, City } = formData;

    // Phone number validation: Must be exactly 10 digits
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(Phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    const whatsappNumber = "919834888821"; // Replace with your actual WhatsApp number in international format
    const whatsappMessage = `*Contact Form Submission*\n\nFull Name: ${FullName}\nEmail: ${Email}\nPhone: ${Phone}\nSubject: ${Subject}\nMessage: ${Message}\nAddress: ${Address}\nCity: ${City}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    alert("You will be redirected to WhatsApp. Press send to complete the process.");
  };

  return (
    <section className="msm-mt-5 msm-contact-page-block">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">

            {/* heading */}
            <h1 class="display-6 fw-normal text-orange">Connect with Us</h1>
            <p class=" text-secondary mb-5 ">Have questions or need assistance? Our team at Metta Share Market is ready to help. Contact us today!</p>
            {/* /heading */}

            <h5 class="mb-4 text-dark">Connect with Us</h5>
            {/* social icons */}
            <ul class="social-menu mb-5">
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

            {/* email address */}
            <h5 class="text-dark">Email Address :</h5>
            <h6 class="nav-item text-secondary mb-5 msm-font-size"><span><FontAwesomeIcon icon={faEnvelope} className='pe-2 ' /></span>
              swapnilkhare3@gmail.com</h6>
            {/* /email address */}

            {/* time */}
            <h5 class="text-dark">Our Timing</h5>
            <h6 class="nav-item text-secondary mb-5 msm-font-size"><span><FontAwesomeIcon icon={faStopwatch} className='pe-2 ' /></span>
            Mon - Sat : 07:00 AM - 10:00 PM <br></br>
            Sun : Closed</h6>
            {/* /time */}

            {/* Call Us */}
            <h5 class="text-dark">Call Us</h5>
            <h6 class="nav-item mb-2 text-secondary msm-font-size">  <span><FontAwesomeIcon icon={faPhone} className='pe-2  ' /></span>
              +91-9834888821</h6>

            <h6 class="nav-item mb-2 text-secondary mb-5 msm-font-size"><span><FontAwesomeIcon icon={faPhone} className='pe-2' /></span>
              +91-9970500727</h6>

            {/* /Call Us */}

            {/* Address */}
            <h5 class="text-dark">Our Office Address</h5>
            <p class=" text-secondary mb-5 msm-font-size"> <FontAwesomeIcon icon={faLocationDot} className='pe-2 ' />Flat No 101, Aqua habitat, shatabdi sq, Badil Kheda, Nagpur, Maharashtra 440027</p>
            {/* /Address */}

            <div className="row">
              <div className="col-12"> <a href="https://g.page/r/CV9yiife7Cz9EB0/review" target="_blank" className="btn btn-success mb-3">Give me feedback </a></div>
              <div className="col-12"><a href="https://goo.gl/maps/hnmrbQDteCWyCzPb8" target="_blank" className="btn btn-danger mb-5">Google map Location </a></div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">

            {/* contact form */}

            <form onSubmit={handleSubmit} className="space-y-4">
              {Object.keys(formData).map((field) => (
                <input
                  key={field}
                  type={field === "Email" ? "Email" : "text"}
                  name={field}
                  placeholder={field.replace(/([A-Z])/g, ' $1').trim()}
                  value={formData[field]}
                  onChange={handleChange}
                  className=" border bg-white text-dark"
                  required
                />
              ))}
              <button type="submit" className=" btn-primary w-100 border-0">
                Submit Form
              </button>
            </form>
            {/* contact form */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;