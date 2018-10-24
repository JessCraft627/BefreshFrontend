import React from 'react'
import logo from '../css/assets/whitelogo.png';

function Footer(props) {
  return (
      <footer className="footer">
          <div className="footer-image">
          <img src={logo} className="footer-logo" alt="logo" />
        </div>
      </footer>
  );
}

export default Footer
