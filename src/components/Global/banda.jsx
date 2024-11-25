import React, { useEffect, useState } from 'react';
import "./banda.css"
const Banda = () => {
    const[categor,setcat]=useState()
    const categories=[
        {
            image:"./laravel.png",
            category:"Laravel"
            
        },{
            image:"./css.png",
            category:"Css"
        },{
            image:"./js.png",
            category:"Javascript"
        },{
            image:"./react2.png",
            category:"Reactjs"
        },{
            image:"./nextjs.png",
            category:"Nextjs"
        },{
            image:"./node.png",
            category:"Nodejs"
        },{
            image:"./c++.png",
            category:"C++"
        },
    ];
    useEffect(() => {
        //Runs only on the first render
        
        const cts=categories.map((category,index)=>{
            return <div key={index} className='categorydv'>
                <div className='categpryimage'> 
                <img src={category.image} />
                </div>
                <span>{category.category}</span>
            </div>

        })
        console.log(cts)
        setcat(cts)
      }, []);
    return (
        <div id='catsection' className='bg-gradient-to-r from-caribbean-current to-gunmetal dark:bg-gunmetal'>
           
            
            <div className="categories">
      <div className="categories-slide">
       {categor}
      </div>

      <div className="categories-slide">
       {categor}
      </div>
    </div>
            
        </div>
    );
}

export default Banda;
