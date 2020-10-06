import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-links">
        <a href="https://github.com/keatonBraith" className="fab fa-github"><span className="footer-link">GitHub</span></a>
        <a href="https://www.linkedin.com/in/keaton-braithwaite-4754a664/" className="fab fa-linkedin"><span className="footer-link">LinkedIn</span></a>
        <Link to="/contact" className="fas fa-envelope"><span className="footer-link">Email</span></Link>
      </div>
      <h5>Keaton Braithwaite 2020 | All Rights Reserved</h5>
    </div>
  );
};

export default Footer;
