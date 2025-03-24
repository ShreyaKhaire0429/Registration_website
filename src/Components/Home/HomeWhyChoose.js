import React from "react";
import "./Home.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow , faM , faFile , faMoneyBill} from '@fortawesome/free-solid-svg-icons';

const HomeWhyChoose = () => {
    return (
        <section className="msm-why-choose-section">
            <div className="container">
                <div className="row align-items-center msm-flex-wrap">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="row">
                            {/*  */}
                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <div className="card mb-4">
                                    <FontAwesomeIcon icon={faLocationArrow} className="text-ornage fs-2 me-auto mb-3" />
                                    <h6 className='text-ornage'>Where is MeTta Financial?</h6>
                                    <p className="text-dark fs-6 m-0">MeTta Financial Investment & Trading Training Institute is a premier stock market training center located in Nagpur, Maharashtra. We welcome everyone to visit and discuss opportunities in the stock market.</p>
                                </div>
                                <div className="card mb-4">
                                    <FontAwesomeIcon icon={faM} className="text-ornage fs-2 me-auto mb-3" />
                                    <h6 className='text-ornage'>What is MeTta Financial?</h6>
                                    <p className="text-dark fs-6 m-0">MeTta Financial Investment & Trading Training Institute is a well-established stock market training institute, founded and led by <span className="text-dark fw-normal">Mr. Swapnil Khaire</span></p>
                                </div>
                            </div>
                            {/*  */}
                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <div className="card mb-4">
                                    <FontAwesomeIcon icon={faFile} className="text-ornage fs-2 me-auto mb-3" />
                                    <h6 className='text-ornage'>How to Join MeTta Financial Academy?</h6>
                                    <p className="text-dark fs-6 m-0">Becoming a part of MeTta Financial Investment & Trading Training Institute is simple! Just reach out through the ‘Contact Us’ section or visit our trading academy to explore our training programs and experience the learning environment firsthand</p>
                                </div>
                                <div className="card mb-4">
                                    <FontAwesomeIcon icon={faMoneyBill} className="text-ornage fs-2 me-auto mb-3" />
                                    <h6 className='text-ornage'>What Does MeTta Financial Provide?</h6>
                                    <p className="text-dark fs-6 m-0">We provide high-quality stock market training through expert-led online and offline personalized sessions, helping traders develop the skills needed to succeed in the Indian stock market.</p>
                                </div>
                            </div>
                            {/*  */}
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 msm-content">
                        <h1 class="display-6 fw-normal text-ornage">Who We Are & What We Do</h1>
                        <p class="text-dark">At MeTta Financial Investment & Trading Training Institute, we are committed to sparking interest in the Indian stock market. We help individuals, especially the youth, explore its possibilities and build a strong foundation in trading. Our goal is to provide the best stock market training in Nagpur, always striving to deliver excellence in financial education.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HomeWhyChoose;
