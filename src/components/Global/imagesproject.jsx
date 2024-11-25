import React from 'react';
import charlotte from "../../../public/charlotte.png"
import charlotteabout from "../../../public/aboutcharlotte.png"
import charlotteserv from "../../../public/charlotteserv.png"
const Imagesproject = () => {
    return (
        <div id='projectimagescontainer'>
           <div><img src={charlotte}/></div> 
          <div><img src={charlotteabout}/></div>  
           <div><img src={charlotteserv}/></div> 
            
        </div>
    );
}

export default Imagesproject;
