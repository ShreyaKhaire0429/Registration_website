// File: src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar/Navbar';
// import Footer from './Components/Footer/Footer';
// import Home from './Components/Home/Home';
// import About from './Components/About/About';
// import Contact from './Components/Contact/Contact';
// import Gallery from './Components/Gallery/Gallery';
// import Testimonial from './Components/Testimonial/Testimonial';
// import Error from './Components/Error/Error';
// import ScrollToTop from './ScrollToTop';
// import RefundPolicy from './Components/RefundPolicy';

// import './App.scss';


// const App = () => {

//   return (

//     <Router>
//       <div className="app">
//         <div className="wrapper">
//           <Navbar />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about-us" element={<About />} />
//             <Route path="/contact-us" element={<Contact />} />
//             <Route path="/testimonial" element={<Testimonial />} />
//             <Route path="/gallery" element={<Gallery />} />
//             <Route path="/refund-policy" element={<RefundPolicy />} />
//             <Route path="*" element={<Error />} />
//           </Routes>
//           <ScrollToTop />
//         </div>
//         <Footer />
//       </div>
//     </Router>


//   );
// };

// export default App;
// Return & Refund Policy

// File: src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './LanguageContext';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Gallery from './Components/Gallery/Gallery';
import Testimonial from './Components/Testimonial/Testimonial';
import Error from './Components/Error/Error';
import Modules from './Components/Modules/Modules';
import Resources from './Components/Resources/Resources';
import ScrollToTop from './ScrollToTop';
import RefundPolicy from './Components/RefundPolicy';
import EnrollmentPage from './Components/Home/EnrollmentPage';
import './App.scss';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <select value={language} onChange={(e) => setLanguage(e.target.value)} className='w-50 d-none'>
      <option value="en">English</option>
      <option value="hi">हिंदी</option>
      <option value="mr">मराठी</option>
    </select>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <div className="app">
          <div className="wrapper">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/course-modules" element={<Modules  />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/testimonial" element={<Testimonial />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="/enrollment-form" element={<EnrollmentPage />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <ScrollToTop />
            <LanguageSelector />
          </div>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
