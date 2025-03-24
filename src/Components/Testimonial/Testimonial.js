// File: src/components/About/About.js
import React from 'react';
import './Testimonial.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import TestimonialPage from '../../assets/img/testimonial.png';
import GoogleRating from '../../assets/img/google-rating.png';
import Google from '../../assets/img/Google.png';


const Testimonial = () => {
  return (
    <div className="msm-mt-5">
      <div className="msm-testimonial-section">

        {/* hero testimonial bg block */}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              {/* content */}
              <div className="msm-testimonial-content">

                <h1 className="display-5 fw-bold mb-3 text-white">Real Stories, <br />Real Success</h1>
                <p className="lead msm-text-secondary fs-6">
                  Our students share their journeys from novices to proficient traders,<br /> highlighting the impact of our training programs.
                </p>

              </div>
              {/* /content */}
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              {/* image */}
              <div className="text-center">
                <img src={TestimonialPage} className="img-fluid msm-testimonial-image" alt="Swapnil-khaire" loading="lazy" />
              </div>
              {/* /image */}
            </div>
          </div>
        </div>
        {/* /hero testimonial bg block */}

      </div>

      <div className="msm-testimonial-cards-blocks">
        {/* testimonial cards*/}
        <div className="container">

          {/* heading */}
          <div className="text-center mb-5">
            <h1 className="display-6 fw-normal text-dark"> What Our Students Say</h1>
            <img src={GoogleRating} className="img-fluid google-rating" alt="GoogleRating" loading="lazy" />

          </div>
          {/* /heading */}
<hr className='mb-5'/>
          <div className="row">

            {/* first card */}
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>Meta Share Market Training Institute is the best place in Nagpur to learn about the share market. This course is very well designed for both beginners and experts. Swapnil sir has in-depth knowledge of trading, supports all the students and one advantage here is that you can repeat the sessions in the future for any queries.</p>
                <h6 className='text-dark'>Vrushabh Jawade</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>Swapnil Khaire sir's have good skills abilities and knowledge to buy and sell stocks, make risk-free investments and manage portfolios effectively. One of the essential skills that is the ability to conduct research and understand the various factors that can influence stock prices. some of the most crucial skills - Analytical skills, Math skills, Financial literacy, Data-based forecasting, Risk quantification, Knowledge of derivatives, Investor sentiments analysis.
                  Swapnil sir's enthusiasm, dedication for teaching is very good, and I am so grateful to have had the opportunity to learn from him. His passion for teaching is truly inspiring,
                  Unwavering commitment to your students is truly admirable, and we are so fortunate to have you this year.
                  We are grateful for everything you've taught us and the support you've given us throughout the year."</p>
                <h6 className='text-dark'>Milind Deshmukh</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>It's the best institution for your Stock Market journey.
                  Specifically thaks to Swapnil Sir, he has experience more than 13years in market.
                  The best thing is if your doing course with sir you have do not worry about your doubts, because there no chance that you got doubt, his teaching style is WOW🙂 You can also get supported by swapnil sir, You can get personal guidence, mentorship.
                  After completing course with sir you can't imagine that you camed far so long, you confidence got to next level
                  (Best trading institution in nagpur for sure) You can see my improvement in only one month</p>
                <h6 className='text-dark'>Ketan Dudhe</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>Great experience at the class. Swapnil Sir teaches good and has very nice n unique techniques. One to one Attention given. Staff is very Co-operative. Overall nice experience. stock market class for who wants to learn from basic. Sir explains everything in very detail which helps one to know the concept very easily. Not an issue if you know nothing about share marketing, because Sir will teach you from a scratch.
                  Just go for it you will not going to regret.
                  Happy to join metta share market institute ✨</p>
                <h6 className='text-dark'>Aniket Nagrikar</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>This is my genuine review about class, Swapnil Sir has very deep knowledge and research and the best technique of teaching, he clears all the doughs and makes us confident and aware too about this huge market . He explained the strategy before the market starts and also explained in the live market too , his predictions are approximately successful. Im glad that i joined
                  Metta Share Market Training Institute. In Nagpur after lots of survey I found the best place for learning and developing platform for and in the share market trading and investment. I know Swapnali Sirs
                  Metta Share Market Training Institute family is going to be very big and successful , and I'm glad to be part of it .😀.</p>
                <h6 className='text-dark'>Supriya Suryawanshi</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>Your passion for teaching shines through everything you do. It's clear that you genuinely care about your students and their success.
                  The extra effort you put into activities, such as teaching the Basics and Advanced Trading and providing the high accuracy strategies really enriches the course.
                  I am glad That I could learn and understand the Trading from you.
                  Thank you Swapnil Sir.👍👍👍</p>
                <h6 className='text-dark'>Smit Dethe</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>MeTha share Market Institute is one of the best institutes in Nagpur.
                  The accuracy level of technical and fundamental analysis of Swapnil sir is very high and teach in the live share market.
                  Swapnil sir is having vast of knowledge about share market.
                  The atmosphere of class is very good for learning and a very friendly.
                  I suggest please join the MeTha Share market Institute.</p>
                <h6 className='text-dark'>Manoj Dudhpachare</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>I recently completed a stock market course with Swapnil Sir, and I can confidently say that he's one of the best teachers out there! His vast knowledge and experience in the stock market, combined with his patient teaching style and unique techniques, makes this course truly exceptional. Swapnil Sir's approach goes beyond textbook knowledge, offering practical insights that are invaluable. The course covers everything from basic strategies to advance market analysis, psychology,money management,and more. A special thanks to Swapnil Sir for sharing his expertise
                  This has been a fantastic learning experience!😊😊😊</p>
                <h6 className='text-dark'>Khushi Ghate</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>"I had a fantastic experience in these classes, thanks to Swapnil Sir's exceptional teaching. With his extensive experience in the stock market, he employs a great teaching methodology, using relatable examples to explain complex concepts. The classroom is well-equipped with all necessary comforts and facilities. Additionally, the detailed notes provided are extremely helpful."</p>
                <h6 className='text-dark'>Vrushabh Jawade</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>Meta Share Market Training Institute is the best place in Nagpur to learn about the share market. This course is very well designed for both beginners and experts. Swapnil sir has in-depth knowledge of trading, supports all the students and one advantage here is that you can repeat the sessions in the future for any queries.</p>
                <h6 className='text-dark'>Sushil Bansod</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>I did not understand anything about the stock marketThen I took class with Swapnil Sir and today I understood a lot of things. Sir teaches very well, my experience in the class has been very good.</p>
                <h6 className='text-dark'>Aishwarya Gajbhiye</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>Skilled and professional training.</p>
                <h6 className='text-dark'>pritam bisan</h6>
              </div>
              {/*  */}
            </div>

            {/* /first card */}

            {/* second card */}
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>Teaching is very good. Cleared all small doutes. Cooperative nature. Giving suggestions on wealth management how to increase. Giving important knowledge on fundamental & technical analysis. In one month definitely I gained knowledge on share market, how it works & how we invest & make the profits. If anyone wants to learn about stocks market I recommended metta share market is best choice .👍</p>
                <h6 className='text-dark'>Ashal Koyadwar</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>Metta shear market best class in nagpur.
                  I have zero knowledge in this field. But sir neture is very polite and helpful. And very supportive and friendly. Swapnil khaire sir have a good skills and knowledge and experience in the shear market I feel proud to join the metta shear market training institutes. Thanks you sir .</p>
                <h6 className='text-dark'>Srushti Gondane</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>Best stock market class in nagpur I had zero knowledge abt stocks and trading with the help of swapnil sir building myself under their guidence!
                  Very helpful and charming nature with knowledge and skills which can help you as your teacher too
                  Thank you</p>
                <h6 className='text-dark'>
                  Khushbu Bagde</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>"I recently took a stock market class taught by swapnil sir , and I was impressed by his extensive knowledge and experience in the financial industry. The course content was comprehensive, covering everything from basic concepts to advanced trading strategies. Sir teaching style was engaging, and he used real-life examples to illustrate complex concepts. Overall, the class exceeded my expectations, and I feel much more confident in my ability to navigate the stock market."</p>
                <h6 className='text-dark'>himanshu wadhai</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>"Great experience! Definitely a must-join .
                  The staff is humble, and the teacher provides personalized attention to each student . 😀
                  Thank you swapnil sir for your guidance ✨</p>
                <h6 className='text-dark'>Dnyanesh Shende</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>I feel proud to join Metta share training institute. Nice explanation and indepth knowledge of share market. Detailed market analysis. And Swapnil Sir is the best teacher Share Market...</p>
                <h6 className='text-dark'>Yogesh Thakur</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>Had good experience in class.. will fully recommend you all to join Metta training Institute for best education</p>
                <h6 className='text-dark'>Manish Bhagat</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>Best classes. Swapnil sir teach each and every angle of market from basic. Cover all market aspects from fundamental, technical to options also..</p>
                <h6 className='text-dark'>Kunal Loke
                </h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>According my experience . I did share Market class before joined meta share Market institute really I got very confused and very hard about share Market....some my colleagues suggested me about meta share Market institute they had completed one year before..i joined and I did really it's very very easy and wonderful knowledge getting .even anyone's can easily understand also the teacher of meta share Market institute Mr. swapnil khaire really he has a great knowledge and always ready to help for 7/24 also his profile % accuracy is amazing unexpected and
                  one of the best thing is i like of this institute... Institute want to see his students want to growth in finicial and became independent for best trader in his life..

                  Thanks
                  Kamlesh Rahangdale</p>
                <h6 className='text-dark'>Kamlesh Rahangdale</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>According to my experience, MeTta share market class is very good, before I joined I don't know anything about share market, I have learned lots of things, swapnil sir has good knowledge and good accuracy level , Thank you sir.</p>
                <h6 className='text-dark'>Priyanka Meshram</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>The institute Metta share market training institutes....🌸
                  The teachings of swapnil sir are too good. He has a lot of knowledge about the share market, his prediction level is on another level, the class environment and his helpful nature inspires us to go further. And the best thing is that he is very supportive. It felt very good to join the class...</p>
                <h6 className='text-dark'>alisha khonde</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>Good Institute to learn Stock market easy and best way thank you Sapnil sir 🙏</p>
                <h6 className='text-dark'>Rupam Dharmik</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>This Institute and class is very awesome. I have learnt so many things in the proper way. This class is very helpful for the next level to build our carrier. if we want to grow in the stock market and get good knowledge from swapnil sir. so we must join this class.</p>
                <h6 className='text-dark'>rahul daheriya</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>Best Metta share market training institute in Nagpur.</p>
                <h6 className='text-dark'>Masum Turkar</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>Metta treding classes is very best class in nagpur swapnil sir has very deep knowledge in stock market. sir's neture is very polite and helpful I have learning so much from swapnil sir thank you so much sir for sharing your valuable knowledge keep growing sir and support us</p>
                <h6 className='text-dark'>ANURAG DONGRE</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>It's the best Institute for anyone who wants to learn Share Market from basics to an advanced level . The teaching method of sir was very easy and convenient and there were no problems with connectivity. Sir is an expert and was very clear in his method of teaching. All my questions were answered and the class interaction was very good. And most important the notes provided by the sir to us are very much easy to understand and are in simple language 😊. Overall the experience was very good with the sir in this class and was of very much friendly in nature😊.</p>
                <h6 className='text-dark'>Rajat lokhande</h6>
              </div>
              {/*  */}
            </div>

            {/* /second card */}

            {/* third card */}
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'> have zero knowledge in this field. After attending classes I was analysed the depth of this share market field.
                  Sir teaches us Analysis and fundamental technical skills in very well way.Good place for beginners.</p>
                <h6 className='text-dark'>rutuja yawale</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>Classes with swapnil sir have been so worthwhile! He is a very thoughtful teacher who puts alot of thought into how he presents the material. I would highly recommend him to anyone who is interested
                  in learning about stocks.</p>
                <h6 className='text-dark'>Jay Tapase</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>Attending these trading classes has been an absolute game-changer for me. I feel more equipped to face the complexities of financial markets confidently. The comprehensive curriculum, expert instructors, practical application, and supportive community combined to create an exceptional learning environment. Whether you're a novice or an experienced trader looking to refine your skills, I highly recommend these trading classes. The investment in knowledge and skills will undoubtedly yield substantial returns in the world of trading.</p>
                <h6 className='text-dark'>Ganesh Pawar</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>Sir has a unique method of teaching..,which help students to improve skills in trading..,i am started from a scratch level and improve up to the advance level</p>
                <h6 className='text-dark'>Hemlata Sarpate</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>Swapnil sir is having very good knowledge of Share Market . Very sound in Technical Analysis . Very supportive and friendly. He try his best to make his students understand concept. Highly recommended if anyone wants to learn trading / investments in Share Market .</p>
                <h6 className='text-dark'>OP</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>"This is the first time I have attended a class in this format and wondered how effective it would be. It was very effective and therefore I would definitely be interested in attending other classes in the same format...I cannot express how great the instructor was and the overall content of the material. I would defintely recommend this to my co-workers as well as friends...I look forward to taking additional classes in the future.
                  Thank You..!!</p>
                <h6 className='text-dark'>Smit Dethe</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>MeTha share Market Institute is one of the best institutes in Nagpur.
                  The accuracy level of technical and fundamental analysis of Swapnil sir is very high and teach in the live share market.
                  Swapnil sir is having vast of knowledge about share market.
                  The atmosphere of class is very good for learning and a very friendly.
                  I suggest please join the MeTha Share market Institute.</p>
                <h6 className='text-dark'>Manish Mambo</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>The one stop solution to learn KG to PG of trading and marketing... I would say Sir, Swapnil Khaire💫 is a A truly exceptional teacher , warm 🌞and approchable . His friendly demeanor gives an inviting atmosphere to all... Trust me it would be a very engaging and enjoyable journey for you once you join these classes.. Much affordable and knowledgable... Cherry on the top is the chance to earn money from the live trading under this👑 gentleman's guidance....trust me as your brother ✌️</p>
                <h6 className='text-dark'>Ankit Bobhate</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>Thank you so much Swapnil Sir. They way you taught us was in simple way that everyone could understand the market. The way of teaching was superb. We came to know many things about the market. Your effort your notes are really very superb...Once again thank you so much Sir for giving us knowledge about share market.</p>
                <h6 className='text-dark'>Swapnil Pimple</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>Best institute for beginners as well as experienced students.
                </p>
                <h6 className='text-dark'>AKSHAY THAKRE
                </h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>I recently had the pleasure of taking the Metta share market course tuition with Swapnil as my teacher, and I can confidently say that it was a fantastic learning experience.

                  First and foremost, Swapnil is an excellent teacher who is knowledgeable, patient, and dedicated to helping his students succeed. He has a deep understanding of the share market and is able to convey complex concepts in a way that is easy to understand.

                  The course itself was well-structured and covered a wide range of topics, from the basics of share market investing to more advanced strategies for analyzing and managing risk. I appreciated the balance between theory and practical applications, as well as the numerous real-world examples that Swapnil shared with us.

                  One aspect of the Metta course that stood out to me was the emphasis on ethical and sustainable investing. I was impressed by Swapnil's commitment to helping us understand the social and environmental impact of our investments, and how we can make informed choices that align with our values.

                  Overall, I highly recommend the Metta share market course tuition with Swapnil as an excellent resource for anyone looking to deepen their knowledge of the share market and become a more confident and responsible investor.</p>
                <h6 className='text-dark'>sanket moon</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>An extremely knowledgeable ,humble and patient teacher who genuinely wants his students to learn in the best way .sir makes us understand all the difficult concept in a very easy manner.. thank u soo much sir for all ur teachings and guidance.. if anyone want to learn trading this is the place where u should visit...
                </p>
                <h6 className='text-dark'>Ram Vibhute
                </h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>Exceptional Institute! Lacking of words to Describe the Institute. Highly Standard Way of teaching! You can never point out a single Mistake. Undoubtedly one of Finest Institute to learn Share Market. MeTta Institute is Underrated yet finest in Nagpur! Swapnil Sir is Very Supportive and Kind. Could have given more stars if possible here! Highly Recommending to Join the Institute! Best Wishes ❤️
                </p>
                <h6 className='text-dark'>Bhojraj K. Kamdi
                </h6>
              </div>
              {/*  */}

            </div>

            {/* /third card */}

            {/* Fouth card */}
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'> If you are an absolute beginner in Trading
                  Then I strongly recommend this Institute 🙌🏻</p>
                <h6 className='text-dark'>Harshal lokhande</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>The best share market class in Nagpur. If you really want to gain knowledge of share market from basic to advanced then i highly recommend to this. The way of teaching and explain the topics awesome. Here you get not only share market training but also finincial management. Iam very heartly thankful to Swapnil sir to give me the best knowledge.</p>
                <h6 className='text-dark'>MAHESH GAJBHIYE</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>Excellent teaching about price action, indicators,chart patterns, option chain data and various types of strategy which will help you in live market and also teaches how to read companies data which will help us in long term investment.</p>
                <h6 className='text-dark'>Sourav Gupta</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>The most effective class,helpful, focused on improvement rather than deficiencies and is provided is a non judgmental, collaborative manner that allows a teacher to reflect on ways they can improve, including specific strategies and price action, u may suggest they explore . Thank you sir.</p>
                <h6 className='text-dark'>Rashmi Ghuse</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>Metta share market is one of the best share market classes in nagpur.
                  After i completed my class i didnt face a losses in trading.
                  And i special thanks to swapnil sir to clear my all doubt .</p>
                <h6 className='text-dark'>Bipeen Chikate</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>Metta share market best class in Nagpur. Thank you swapnil khaire</p>
                <h6 className='text-dark'>Chandrashekhar Bangadkar
                </h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>It was superb experience to join Metta share market institute.. SWAPNIL sir's technical knowledge is EXCELLENT.. With polite teaching n good presentation..If you want to change your wealth life then GRAB THE OPPORTUNITY..</p>
                <h6 className='text-dark'>minal gaikwad</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>The course content covered a wide range of topics, including 'fundamental analysis,' 'technical analysis,' 'risk management,' 'trading strategies,' This comprehensive approach was beneficial as it provided a well</p>
                <h6 className='text-dark'>PRATIK UDAPURE
                </h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>After this course, knowledge gained will definitely change the way we perceive financial markets. Thanks a lot Swapnil sir for imparting best of your knowledge and thoughts.</p>
                <h6 className='text-dark'>shivani banginwar</h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>Sir teaches good …but I don’t know why he never show his profits in group(discussion group )...how can we say if he trades his own setups or not…
                </p>
                <h6 className='text-dark'>Sanket Shambharkar
                </h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>Sir has an excellent knowledge & experience. He teaches in very simple language. If you hv doubts you can ask untill u understand. Excellent place to learn about stock market.</p>
                <h6 className='text-dark'>Nikhil Rajulwar
                </h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>What sir teach me about share market will always be with me,Sir's teaching is very useful for me, sir have very nice knowledge about it,& for sharing your knowledge with me thank you Sir.
                </p>
                <h6 className='text-dark'>Shreyash S Gumdelwar
                </h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>Coaching at MeTta Institute was a MESMERIZING EXPERIENCE in my life.
                  You simplified highly convoluted principles of the FINANCIAL MARKETS and helped me to gain the EXPERTISE in the TRADING.
                  Your sessions were full of ENTHUSIASM, MOTIVATION and KNOWLEDGE.
                  I wish everyone should benefit from you to attain the FINANCIAL INDEPENDENCE.
                  Once again THANKS A LOT!
                </p>
                <h6 className='text-dark'>dr.ajay kant
                </h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>Don't ever join this academy ..he just finishes his teaching vary fast...and not caring if his students are understanding or not ..zero star ..money wasted
                </p>
                <h6 className='text-dark'>Peyash Ramteke
                </h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>It's very good institution & personal attention to every candidate for motivation along with trading psychology build up
                </p>
                <h6 className='text-dark'>Anil Thool
                </h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>I got to learn a lot about the share market because of the classes here. I didn't have any knowledge about the share market before. But because of this class, I started to know the little things in the share market. These classes gave me almost complete information about what plan to implement in any situation, how to keep yourself away from mental stress and fear. The credit goes to Mr. Swapnil Khaire sir.

                  Thank you sir!
                  All the best to you for the next step in life
                  Good luck...
                  💐💐💐
                </p>
                <h6 className='text-dark'>prashantkumar fulbandhe
                </h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>Swapni sir, you taught me very well, earlier I did not even understand the stock market, by applying what you taught in the market, today I understand the market very well. Thank you, swapnil sir
                </p>
                <h6 className='text-dark'>Rohan Shahare

                </h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>
                </p>
                <h6 className='text-dark'>Naresh Parchake
                </h6>
              </div>
              {/*  */}

              {/*  */}
              <div className="card mb-3">
              <img src={Google} className="img-fluid msm-google-image" alt="Swapnil-khaire" loading="lazy" />
                <h6 className='mb-3'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></h6>
                <p className='text-secondary fs-6 mb-3'>An extremely knowledgeable ,humble and patient teacher who genuinely wants his students to learn in the best way .sir makes us understand all the difficult concept in a very easy manner.. thank u soo much sir for all ur teachings and guidance.. if anyone want to learn trading this is the place where u should visit...
                </p>
                <h6 className='text-dark'>Ankita Ingle
                </h6>
              </div>
              {/*  */}

            </div>

            {/* /Fouth card */}
          </div>

          <div className="d-flex justify-content-center py-3">
            <a class="btn-primary" target="_blank" href="https://g.co/kgs/YtHMjr4">Check our Google reviews and share your experience!</a>
          </div>
        </div>
        {/* /testimonial cards */}
      </div>
    </div>
  );
};

export default Testimonial;
