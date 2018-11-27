import React from 'react'
import logo from '../css/assets/whitelogo.png';

function Footer(props) {
  return (
      <footer className="footer">
        <main id="footer-image" className="raspberry-photo">
            <img src={logo} className="footer-logo" alt="smoothie-logo" />
        </main>
      </footer>
  );
}

export default Footer
