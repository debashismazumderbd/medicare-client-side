import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'




const Services = () => {
    const [services,setServices]=useState([])

    useEffect(()=>{
        fetch('Services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div id='Service'>
            <div className='mt-5'  id='Services'>
        
        <marquee className='mark' behavior="scroll" direction="left" scrollamount="10"><h1>Our Services Available</h1></marquee>
    
    <div className='service-container '>
        
       {
           services.map(services=><Service key={services.id} services={services}></Service>)
       }
    </div>
    </div>
        </div>
    );
};

export default Services;