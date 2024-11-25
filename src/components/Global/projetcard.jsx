import React from 'react';
import './projectardprime.css'
const Projetcard = ({title,para,image,id}) => {
    return (
        <div className='relative cardprojectprime rounded-lg'>
            <img src={image} alt="" />
            <div className='absolute text-white bg-gradient-to-b from-transparent to-gunmetal/30  rounded-lg contantcardd inset-0'>
<h2 className='font-bold font-title text-xl text-turquoise '>{title}</h2>
<p className=' font-subtitle font-bold text-blue-100 text-center pb-4 '>{para}</p>
<div className='inline-flex rounded-lg bg-turquoise p-2 px-4 text-gunmetal   text-center'>EXPLORE IT</div>
            </div>
        </div>
    );
}

export default Projetcard;
