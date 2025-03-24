import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './Home.scss';

const TestimonialSlider = () => {
  const testimonials = [
    {
      name: "Vrushabh Jawade",
      feedback: "Meta Share Market Training Institute is the best place in Nagpur to learn about the share market. This course is very well designed for both beginners and experts. Swapnil sir has in-depth knowledge of trading, supports all the students and one advantage here is that you can repeat the sessions in the future for any queries.",
    },
    {
      name: "Khushbu Bagde",
      feedback: "Best stock market class in nagpur I had zero knowledge abt stocks and trading with the help of swapnil sir building myself under their guidence! Very helpful and charming nature with knowledge and skills which can help you as your teacher too Thank you",

    },
    {
      name: "OP",
      feedback: "Swapnil sir is having very good knowledge of Share Market . Very sound in Technical Analysis . Very supportive and friendly. He try his best to make his students understand concept. Highly recommended if anyone wants to learn trading / investments in Share Market .",

    },
    {
      name: "Sourav Gupta",
      feedback: "Excellent teaching about price action, indicators,chart patterns, option chain data and various types of strategy which will help you in live market and also teaches how to read companies data which will help us in long term investment.",
    },
    {
      name: "Yogesh Thakur",
      feedback: "I feel proud to join Metta share training institute. Nice explanation and indepth knowledge of share market. Detailed market analysis. And Swapnil Sir is the best teacher Share Market..",

    },
    {
      name: "Priyanka Meshram",
      feedback: "According to my experience, MeTta share market class is very good, before I joined I don't know anything about share market, I have learned lots of things, swapnil sir has good knowledge and good accuracy level , Thank you sir.",

    },
    {
      name: "Alisha khonde",
      feedback: "The institute Metta share market training institutes....🌸 The teachings of swapnil sir are too good. He has a lot of knowledge about the share market, his prediction level is on another level, the class environment and his helpful nature inspires us to go further. And the best thing is that he is very supportive. It felt very good to join the class...",

    },
  ];

  return (
    // testimonial
    <div className="msm-testimonial-slider-block">
      <div className="container">
        <div class="wrap-content pb-4 text-center">
          <h1 class="display-6 fw-normal text-dark">Learn. Trade. Succeed</h1>
          <h5 className="fw-normal text-dark ">Stories That Inspire</h5>
          <p class=" text-dark mb-2">Our students’ testimonials highlight their journeys from complete beginners to confident <br /> traders, proving that with the right guidance, success is within reach.</p>
        </div>
        <div className="testimonial-slider">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-card">
                  {/* rating starts */}
                  <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                  {/* customer feedback */}
                  <p className="text-secondary">{testimonial.feedback}</p>
                  {/* customer name */}
                  <h6 className='text-dark'>{testimonial.name} </h6>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="justify-content-center d-flex py-4">
          <a class="btn-primary" href="/testimonial">Check more</a>
        </div>
      </div>
    </div>
    // /testimonial
  );
};

export default TestimonialSlider;
