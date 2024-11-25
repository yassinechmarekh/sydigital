import { AppWindow, AppWindowMac } from 'lucide-react';
import React from 'react';

const Serviceherocard = ({iconser,titleservcard,paraservcard}) => {
    return (
        <div id="cardsev">
        {iconser}
            <span className='font-title font-bold text-gunmetal dark:text-turquoise'>{titleservcard}</span>
            <p className='font-subtitle'>{paraservcard}</p>
            
        </div>
    );
}

export default Serviceherocard;
