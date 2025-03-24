import React from 'react';
import './Resources.scss';
import Upstox from '../../assets/img/upstox-logo.webp';
import Book1 from '../../assets/img/81BE7eeKzAL._SY466_.jpg';
import Book2 from '../../assets/img/711xMzVPIuL._SY342_.jpg';
import Book3 from '../../assets/img/41lJjTYiFfL._SY445_SX342_.jpg';
import Book4 from '../../assets/img/41yanQNNzbL._SY445_SX342_.jpg';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Resources = () => {
    return (
        <div className="msm-mt-5 msm-resources-conatiner">
            <div className="container text-center">
                <h1 className="display-6 fw-normal pt-5">
                    Recommended Brokers for Stock Market
                </h1>
                <img src={Upstox} className="my-3" alt="Upstox" loading="lazy" />
                <h6 className='mb-5'>
                    <span className='text-dark'> Open Your Demant Account in Upstox</span><br />
                    <a href="https://upstox.com/open-account/?f=JG1348" target="_blank" className='text-orange' rel=""> https://upstox.com/open-account/?f=JG1348</a>
                </h6>
            </div>

            <div className="container text-center">

                <h4 className="fw-normal pt-5 mb-5">
                    Books We Recommend
                </h4>
                <div className="row">

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card text-center mb-5 p-3">
                            <div className="m-auto">
                                <img src={Book1} className="my-3" alt="Upstox" loading="lazy" />
                            </div>
                            <h5>Rich Dad Poor Dad</h5>
                            <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>

                            <div className="m-auto">
                                <a href="https://amzn.in/d/fnS82r9" target="_blank" className='btn btn-warning mb-3'>Buy now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card text-center mb-5 p-3">
                            <div className="m-auto">
                                <img src={Book2} className="my-3" alt="Upstox" loading="lazy" />
                            </div>
                            <h5>Think and Grow Rich</h5>
                            <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>

                            <div className="m-auto">
                                <a href="https://amzn.in/d/hcovvtF" target="_blank" className='btn btn-warning mb-3'>Buy now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card text-center mb-5 p-3">
                            <div className="m-auto">
                                <img src={Book3} className="my-3" alt="Upstox" loading="lazy" />
                            </div>
                            <h5>How I Made $2,000,000 in the Stock Market</h5>
                            <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>

                            <div className="m-auto">
                                <a href="https://amzn.in/d/em73e6W" target="_blank" className='btn btn-warning mb-3'>Buy now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="card text-center mb-5 p-3">
                            <div className="m-auto">
                                <img src={Book4} className="my-3" alt="Upstox" loading="lazy" />
                            </div>
                            <h5>The Power of Your Subconscious Mind</h5>
                            <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>

                            <div className="m-auto">
                                <a href="https://amzn.in/d/gDOeeT8" target="_blank" className='btn btn-warning mb-3'>Buy now</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default Resources;
