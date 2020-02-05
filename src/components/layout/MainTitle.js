import React from 'react';
import mainStyles from './css/mainStyles.css';

const MainTitle = (props) => {
    const{headline, subhead} = props;
    return (
        <div>
            <h1>{headline}</h1>
            <p>{subhead}</p>
        </div>
    )
}

export default MainTitle;