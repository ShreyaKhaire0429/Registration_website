// File: src/components/ErrorPage/ErrorPage.js
import React from 'react';
import './Error.scss';

const Error = () => {
  return (
    <div className="msm-error-page-block">
      <div className="error-page m-auto">
        <div className="msm-container">
          <div className="eyes my-5">
            <div className="eye">
              <div className="eye__pupil eye__pupil--left"></div>
            </div>
            <div className="eye">
              <div className="eye__pupil eye__pupil--right"></div>
            </div>
          </div>
          <h1 className="display-1 fw-normal mb-3 text-dark">404</h1>
          <p className="lead text-secondary fs-6">Oops! The page you're looking for doesn't exist.</p>
          <a className="btn btn-primary border-0" href="/">Back to Home</a>
        </div>
      </div>
    </div>
  );
};
export default Error;
