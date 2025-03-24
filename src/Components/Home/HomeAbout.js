import React from "react";
import "./Home.scss";
import HeroAbout from '../../assets/img/about.jpg';
import HeroAboutOne from '../../assets/img/HeroAbout.jpg';


const HomeAbout = () => {
    return (
        <section className="msm-about-section d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 msm-text-align">
                        {/* heading */}
                        <h1 className="display-6 fw-normal mb-3">
                            About MeTta
                        </h1>
                        {/* /heading */}

                        {/* description */}
                        <p className="msm-lead-description">
                            <span className="text-ornage fw-bold">Financial Investment & Trading Training Institute</span> is a premier education provider in stock market trading and investment strategies. Committed to building a new generation of skilled traders, MeTta offers comprehensive courses covering Stock Market Basics, Technical Analysis, Futures & Options, Commodities, Currencies, Risk & Money Management, and Trading Psychology.

                            With a scientifically designed curriculum and a practical approach, our training programs cater to both beginners and experienced traders. At MeTta, we empower individuals with the knowledge and confidence to navigate financial markets effectively and achieve long-term success.
                        </p>
                        {/* /description */}

                        {/* button */}
                        <div className="lw-msm-button-p">
                            <a class="btn-primary" href="/about-us">Learn more</a>
                        </div>
                        {/* /button */}

                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="d-flex justify-content-center">
                            <div className="image-container">
                                {/* image first as  default*/}
                                <img src={HeroAbout} className="img-fluid  w-100 rounded-4 mt--2 default" alt="MeTta Financial Investment & Trading Training Institute" loading="lazy" />

                                {/* image first as  hover*/}
                                <img src={HeroAboutOne} className="img-fluid w-100 rounded-4 mt--2 hover" alt="MeTta Financial Investment & Trading Training Institute" loading="lazy" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HomeAbout;
