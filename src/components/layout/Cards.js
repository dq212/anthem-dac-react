import React, { Component } from 'react';
import cardStyles from './css/cardStyles.css';
import Card from './Card';

import logo1 from '../../imgs/icon-accident.svg';
import logo2 from '../../imgs/icon-indemity.svg';
import logo3 from '../../imgs/icon-shortTerm-medical.svg';
import logo4 from '../../imgs/icon-health-wellness.svg';


class Cards extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        const {title, body, icon} = this.props;
        return (
        <div className="card-holder cards-grid">
        <Card id="card-1" title = "Critical Illness & Accident" body="You never know when something unexpected can happen. Protect yourself from the daily costs that can add up if you have a serious illness or injury from an accident." icon={logo1}/>
       <Card id="card-2" title = "Fixed Indemnity" body="Going to the hospital or getting surgery can be expensive. Supplemental fixed indemnity insurance can help you pay those expenses. Plans include a lump sum critical illness benefit for you and your covered spouse, along with a benefit for each covered dependent child." icon={logo2}/>
       <Card id="card-3" title = "Short Term Medical" body="Between jobs, a recent graduate, working part-time or retiring early and not yet Medicare eligible? Here’s a great way to get affordable, temporary coverage." icon={logo3}/>
       <Card id="card-4" title = "Health & Wellness" body="Enjoy savings on prescription drugs, the convenience of telemedicine, even savings on specialty health and wellness services like chiropractors, massage therapists and more." icon={logo4}/>
        </div>
        
        )
    }
}


export default Cards;