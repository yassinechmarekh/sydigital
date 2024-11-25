import React from 'react';

// eslint-disable-next-line react/prop-types
const Servicecard = ({servicename,imagechara}) => {
    return (
        <div className="cardservice bg-gunmetal dark:bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg rounded-lg p-8 hover:bg-opacity-50 transition-all duration-300 cursor-pointer"
        >
        <div className='cardservicetext'>
              <h2 className='font-title text-3xl font-bold text-turquoise'>{servicename}</h2>
              <div className='lijablahcontainer font-subtitle'>

                  <div className='bg-turquoise text-gunmetal font-bold '>lijablah  wnzid wnzid</div>
                  <div  className='bg-turquoise text-gunmetal font-bold '>lijablah wnzid</div>
                  <div  className='bg-turquoise text-gunmetal font-bold '>lijablah </div>
                  <div  className='bg-turquoise text-gunmetal font-bold '>lijablah wnzid2</div>
                  <div  className='bg-turquoise text-gunmetal font-bold '>lijablah wnzid lijablah</div>
                  <div  className='bg-turquoise text-gunmetal font-bold '>lijablah wnzid</div>

              </div>

              <p className='font-subtitle'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat non quibusdam eos ducimus, vitae magnam aut quos libero sapiente voluptatum unde qui illum. </p>
              <div className='cardservbtn  bg-turquoise font-bold text-gunmetal'>Get a Free Quote</div>

          </div>
          <div  className='cardserviceimg' >
          <img src={imagechara} alt="" className='imagecharacard'/>
          <img src="./starelement.png" alt="" className='starelement1'/>
          <img src="./arrowelement.png" alt="" className='starelement2'/>
          <img src="./starelement2.png" alt="" className='starelement3'/>
          <div className='circlebig bg-turquoise'/>
          <div className='circlesmall bg-turquoise'/>
          </div>
        </div>
    );
}

export default Servicecard;
