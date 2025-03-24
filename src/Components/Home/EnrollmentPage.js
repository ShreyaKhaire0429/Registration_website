// File: src/components/ErrorPage/ErrorPage.js
import React, { useEffect, useState } from 'react';
import Enrollment from './EnrollmentForm';
import './Home.scss';
import EnrollImage from '../../assets/img/enroll-image.jpg';

const EnrollmentPage = () => {

    // call random image
    // Manually list all images
    const images = [
        require('../../assets/randomFolder1/image1.jpg'),
        require('../../assets/randomFolder1/image2.jpg'),
        require('../../assets/randomFolder1/image3.jpg'),
        require('../../assets/randomFolder1/image5.jpg'),
        require('../../assets/randomFolder1/image6.jpg'),
        require('../../assets/randomFolder1/image7.jpg'),
        require('../../assets/randomFolder1/image8.jpg'),
        require('../../assets/randomFolder1/image9.jpg'),
        require('../../assets/randomFolder1/image10.jpg'),
        require('../../assets/randomFolder1/image11.jpg'),
    ];

    // Select a random image on reload
    const [randomImage, setRandomImage] = useState('');

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * images.length);
        setRandomImage(images[randomIndex]);
    }, []);


    return (
        <>
            {/* hero section */}
            <div className="msm-enrollment-page-block" style={{ backgroundImage: `url(${randomImage})` }}>
                <div className="container">
                    <div className="row align-items-center">
                        {/* content */}
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="px-4">
                                <h1 className="display-5 fw-bold mb-4 text-white">
                                    Unlock Your Share Market Potential
                                </h1>
                                <h5 className='text-white fw-bold mb-4'>Join Us Today and Elevate Your Trading Journey</h5>
                                <p className="lead msm-text-secondary fs-6">
                                    Take the first step towards financial success by enrolling with us. <br />Gain exclusive access to expert insights, advanced trading strategies, and round-the-clock support to boost your share market expertise.
                                </p>
                            </div>
                        </div>
                        {/* /content */}

                        {/* form */}
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <Enrollment />
                        </div>
                        {/* /form */}
                    </div>
                </div>
            </div>
            {/* hero section */}
            <div className="container msm-enroll-content-section-block">
                <div className="row">

                    {/* /heading */}
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <h1 class="display-6 fw-normal text-dark">Take Control of Your Financial Future</h1>
                        <p class="text-dark">Imagine having the confidence to navigate the share market with ease. With our expert resources and dedicated support, you’ll unlock the skills to make informed decisions and maximize your investments. Whether you're a beginner or an experienced trader, we empower you to achieve your financial goals.
                        </p>

                        <h3 className='fw-normal text-dark mt-5 mb-4'>Here’s What Awaits You:</h3>

                        <li className="text-dark fw-normal my-2">Access to in-depth market research and insights.</li>
                        <li className="text-dark fw-normal my-2">Customized trading plans designed for your success.</li>
                        <li className="text-dark fw-normal my-2">Ongoing guidance to help you stay ahead of market trends.</li>
                        <li className="text-dark fw-normal my-2">A vibrant community of like-minded investors to collaborate with.</li>
                    </div>
                    {/* /heading */}

                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="d-flex justify-content-center">
                            <img src={EnrollImage} alt="Enroll Image" className='image-enroll' loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
            
            <hr className='container' />
            
            {/* contact us */}
            <div className="msm-container-block">
                <div className="container text-dark text-center">
                    <h3 className='fw-normal'>Need help? Contact our support team anytime at</h3>
                    <p className='text-green mb-4'>swapnilkhare3@gmail.com</p>
                    <div className="d-flex justify-content-center">
                        <a href="/contact-us" target="_blank" className='btn-primary'>Contact Us</a>
                    </div>
                </div>
            </div>
            {/* /contact us */}
        </>
    );
};
export default EnrollmentPage;
