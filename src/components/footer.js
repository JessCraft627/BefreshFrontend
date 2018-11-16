import React from 'react'
import logo from '../css/assets/whitelogo.png';

function Footer(props) {
  return (
      <footer className="footer">
        <main id="footer-image" className="footer-image">
            <img src={logo} className="footer-logo" alt="logo" />
        </main>
      </footer>
  );
}

export default Footer
