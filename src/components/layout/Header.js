import React from 'react';
import headerStyles from './css/headerStyles.css';

 const Header = (props) => {
     const {branding} = props;
    return (
         <div id="showcase">
        <h1>Welcome to the
          affordable
          coverage you
          deserve.</h1>
    
        <p>Discover all the ways you can bridge the gap in
          medical coverage. Now, at a low monthly cost.</p>
    
          <a id="btn-discover" className="btn btn-yellow" href="#form-holder">Start the conversation</a> 
      </div>
    )
}


export default Header;