import React from "react";
import "./Home.scss";
import NagpurBestClassesOne from '../../assets/img/IMG_1313.JPG';
import NagpurBestClassesTwo from '../../assets/img/IMG_1309.JPG';
import NagpurBestClassesThree from '../../assets/img/IMG_1330.JPG';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench, faChartSimple, faMagnifyingGlassChart, faBrain, faDollarSign, faCalendarWeek, faArrowTrendUp, faPersonWalking, faGaugeHigh, faHandshake, faNoteSticky, faMoneyCheck, faSatelliteDish, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";


const NagpurBestClasses = () => {
    return (
        <section className="msm-nagpur-best-classes-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-12 col-lg-6">

                        {/* heading */}
                        <p className="text-secondary">#MeTta #MeTtaNagpur #BestShareMarketTraining  #MeTtaFinancial </p>
                        <h1 class="display-6 fw-normal">Master the Stock Market with the Best Training in <span className="msm-highlight">Nagpur</span></h1>
                        <p class="text-dark">Looking to gain expertise in the stock market? You’re in the right place! MeTta Financial Investment & Trading Training Institute is a trusted name in stock market education, offering expert-led online and offline training to help individuals navigate the complexities of trading and investing.
                            <br /> <br />
                            Every year, many individuals step into the stock market, but only a few achieve success. The difference? The right knowledge, skills, and strategy. That’s where we come in!
                            <br /><br />
                            At MeTta Financial, we focus on:
                        </p>

                        <li className="text-dark fw-normal my-2">✅ Stock Market Fundamentals & Strategies</li>

                        <li className="text-dark fw-normal my-2">✅ Risk Management & Smart Investing</li>
                        <li className="text-dark fw-normal my-2">✅ Technical & Fundamental Analysis</li>
                        <li className="text-dark fw-normal my-2">✅ Trading Psychology & Market Trends</li>

                        <p className="text-dark fw-normal my-4">With a commitment to practical learning and real-world application, we provide personalized guidance to help you make informed trading and investment decisions.
                            <br /><br />
                            🚀 Start Your Stock Market Journey Today!
                        </p>
                        {/* /heading */}

                        <a href="/contact-us" className="btn-primary">Contact Us</a>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div class="msm-card">
                            <p><img src={NagpurBestClassesThree} alt="About image" loading="lazy" /></p>
                            <p><img src={NagpurBestClassesTwo} alt="About image" loading="lazy" /></p>
                            <p><img src={NagpurBestClassesOne} alt="About image" loading="lazy" /></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Learning Highlights */}
            <div className="container pt-5 mt-5" id="learning-highlights">
                <h1 className="fs-3 fw-normal text-dark text-center">Learning Highlights</h1>
                <div className="row msm-top-spacing">
                    {/*  */}
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                        <div className="card text-center">
                            <FontAwesomeIcon icon={faScrewdriverWrench} className="msm-text-dark fs-3 m-auto mb-3" />
                            <h6>Technical Analysis <br />
                                (Basics to Advanced)</h6>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                        <div className="card text-center">
                            <FontAwesomeIcon icon={faChartSimple} className="msm-text-dark fs-3 m-auto mb-3" />
                            <h6>Chart Reading Techniques</h6>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                        <div className="card text-center">
                            <FontAwesomeIcon icon={faMagnifyingGlassChart} className="msm-text-dark fs-3 m-auto mb-3" />
                            <h6>Fundamental Analysis</h6>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                        <div className="card text-center">
                            <FontAwesomeIcon icon={faBrain} className="msm-text-dark fs-3 m-auto mb-3" />
                            <h6>Trader Psychology</h6>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                        <div className="card text-center">
                            <FontAwesomeIcon icon={faDollarSign} className="msm-text-dark fs-3 m-auto mb-3" />
                            <h6>Long-Term Investment
                            </h6>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                        <div className="card text-center">
                            <FontAwesomeIcon icon={faHandshake} className="msm-text-dark fs-3 m-auto mb-3" />
                            <h6>Derivative And Future & Option’s</h6>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                        <div className="card text-center">
                            <FontAwesomeIcon icon={faChartSimple} className="msm-text-dark fs-3 m-auto mb-3" />
                            <h6>Best Trading Strategies</h6>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                        <div className="card text-center">
                            <FontAwesomeIcon icon={faCalendarWeek} className="msm-text-dark fs-3 m-auto mb-3" />
                            <h6>2 Months Course</h6>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                        <div className="card text-center">
                            <FontAwesomeIcon icon={faGaugeHigh} className="msm-text-dark fs-3 m-auto mb-3" />
                            <h6>Risk Management</h6>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                        <div className="card text-center">
                            <FontAwesomeIcon icon={faArrowTrendUp} className="msm-text-dark fs-3 m-auto mb-3" />
                            <h6>Best ⁠Stock Selection</h6>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                        <div className="card text-center">
                            <FontAwesomeIcon icon={faPersonWalking} className="msm-text-dark fs-3 m-auto mb-3" />
                            <h6>When to enter in a stock</h6>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                        <div className="card text-center">
                            <FontAwesomeIcon icon={faPersonWalking} className="msm-text-dark fs-3 m-auto mb-3" />
                            <h6>When to exit from a stock</h6>
                        </div>
                    </div>
                    {/*  */}
                </div>
            </div>
            {/* /Learning Highlights */}

            {/* /Benefits */}
            <div className="container pt-5 mt-5">
                <h1 className="fs-3 fw-normal text-dark text-center">Benefits</h1>
                <div className="row msm-top-spacing justify-content-center">
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                        <div className="card text-center">
                            <FontAwesomeIcon icon={faGaugeHigh} className="msm-text-dark fs-3 m-auto mb-3" />
                            <h6>Life-Time Support</h6>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                        <div className="card text-center">
                            <FontAwesomeIcon icon={faSatelliteDish} className="msm-text-dark fs-3 m-auto mb-3" />
                            <h6>Live Session</h6>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                        <div className="card text-center">
                            <FontAwesomeIcon icon={faMoneyCheck} className="msm-text-dark fs-3 m-auto mb-3" />
                            <h6>7 Day's Refundable policy</h6>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                        <div className="card text-center">
                            <FontAwesomeIcon icon={faNoteSticky} className="msm-text-dark fs-3 m-auto mb-3" />
                            <h6>Provide Quality Notes </h6>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                        <div className="card text-center">
                            <FontAwesomeIcon icon={faWhatsapp} className="msm-text-dark fs-3 m-auto mb-3" />
                            <h6>What's App group</h6>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
                        <div className="card text-center">
                            <FontAwesomeIcon icon={faRightFromBracket} className="msm-text-dark fs-3 m-auto mb-3" />
                            <h6>Batch Rejoin Facility Within One Year</h6>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Benefits */}
        </section>
    );
};

export default NagpurBestClasses;
