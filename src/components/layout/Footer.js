import React, { Component } from 'react';
import footerStyles from './css/footerStyles.css';
import footerLogo from '../../imgs/logo-DAC-white.svg';

class Footer extends Component {
    render() {
        return (
            <footer>
    <div id="logo-footer">
        <div className="footer-grid">
        <div id="logo-footer-holder">
            <div className="logo-footer">
              <a href="#" className="logo-footer-link" target="_blank">
            <img className="logo-footer-img" src={footerLogo} alt="" />
          </a>
          </div>
          </div>
          <div id="phone-holder-footer" >
              <p className="small-footer-copy">Call to start a conversation today: </p><span className="phone-footer"><a href="tel:1-833-248-9185" className="phone-link-footer" >1-833-248-9185</a> <span className="thin">TTY:711</span></span>
              <p>8:30am - 6pm</p>
            </div>
      </div>
     
      </div>
</footer>
        )
    }
}
export default Footer;