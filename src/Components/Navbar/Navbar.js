import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import mettaLogo from "../../assets/img/metta-logo.png";
import { useLanguage } from "../../LanguageContext";
import "./Navbar.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  const { translate } = useLanguage();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg msm-navmenu-bar py-3 fixed-top bg-primary-color">
      <div className="container">
        <NavLink className="navbar-brand text-success" to="/">
          <img
            src={mettaLogo}
            className="img-fluid"
            alt="MeTta Financial Investment & Trading Training Institute"
            loading="lazy"
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isNavCollapsed ? "" : "show"}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto text-center text-white">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                onClick={() => setIsNavCollapsed(true)}
              >
                {translate("Home")}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/course-modules"
                onClick={() => setIsNavCollapsed(true)}
              >
                {translate("Course Modules")}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/resources"
                onClick={() => setIsNavCollapsed(true)}
              >
                {translate("Resources")}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about-us"
                onClick={() => setIsNavCollapsed(true)}
              >
                {translate("About us")}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact-us"
                onClick={() => setIsNavCollapsed(true)}
              >
                {translate("Contact us")}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/testimonial"
                onClick={() => setIsNavCollapsed(true)}
              >
                {translate("Testimonial")}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/gallery"
                onClick={() => setIsNavCollapsed(true)}
              >
                {translate("Gallery")}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
