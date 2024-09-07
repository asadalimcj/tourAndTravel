import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Sky Travel</h1>
          <p>Explore The Beauty of World</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
        
      </div>
      <div className="bottom">
        <div>
          <h4>Projects</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">GitHub</a>
          <a href="/">Issues</a>
          <a href="/">Projects</a>
          <a href="/">Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">TroubleShooting</a>
          <a href="/">Contact Us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms Of Service</a>
          <a href="/">Privacy</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
}
