import Callprjct from '@/components/Global/callprjct';
import Projects from '@/components/Global/projects';
import Projectshero from '@/components/Global/projectshero';
import React from 'react';

const Projectspage = () => {
    return (
        <div>
            <Projectshero/>
    <Projects/>
    <Callprjct/>
        </div>
    );
}

export default Projectspage;
