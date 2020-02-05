import React from 'react';
import { Link } from 'react-router-dom';
import logoDac from '../../imgs/logo-DAC.svg';
import headerLogoStyles from './css/headerLogoStyles.css';

const LogoHeader = (props) => {
    const{branding} = props;
    return (
        <div className='header-grid'>
            <div>
            <img className = "logo" src={logoDac}/>
            </div>
          
                <div id="phone-holder" >
                    <p>Call to start a conversation today:</p>
                    <div className="phone">
                        <a className="phone-link" href={`tel:1-833-248-9185`}>1-833-248-9185</a> { }
                        <span className="thin">TTY:711</span>
                    </div>
                    <p>8:30am - 6pm</p>
                </div>
           
        </div>
    )
}


export default LogoHeader;