import React, { Component } from 'react';
import cardStyles from './css/cardStyles.css';

class Card extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        const {title, body, icon} = this.props;
        return (
        <div id={this.props.id} className="card card-grid" >
            <div className="card-content">
                <div ><img className="icon" src={icon} alt="" /></div>
        <h4 className="card-title-blue">{title}</h4>
                <hr/>
                <p>{body}</p>
            </div>
          <a id="btn-critical" className="btn btn-card" href="#form-holder">Start the conversation</a> 
        </div>
        
        )
    }
}


export default Card;