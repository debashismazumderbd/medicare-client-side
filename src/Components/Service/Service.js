import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {img,id,name,price,description}=props.services;
    return (
       
            
        
<div className=''>
<div className='service pb-3 m-3 p-3 backgroundColor ' >
        
<div className='cart'>
        <img  src={img} alt="" />
        <p>id:{id}</p>
        <h3>Name:{name}</h3>
        <h4>price:{price}</h4>
        <p>Description:{description}</p>
</div>
        
        
        <Link to={`/booking/${name} ${price} ${description}`}>
        <button className='btn-primary'>Book:{name.toLowerCase()}</button>
        </Link>
        
    </div>
   
</div>
        
    );
};

export default Service;