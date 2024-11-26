import { AppWindow, AppWindowMac } from 'lucide-react';
import React from 'react';

const Serviceherocard = ({iconser,titleservcard,paraservcard}) => {
    return (
        <div id="cardsev">
        {iconser}
            <span className='text-xl font-title font-bold text-caribbean-current dark:text-turquoise'>{titleservcard}</span>
            <p className='parag text-sm'>{paraservcard}</p>
            
        </div>
    );
}

export default Serviceherocard;
