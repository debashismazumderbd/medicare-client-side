import React from 'react';
import './Expert.css';


const Expert = (props) => {
    const {img,name,expertize}=props.expert;
    return (
<div className='col-lg-6 col-md-6 col-sm-6' >
<div className='text-white bg-dark '>
                <img className='m-5 experts' src={img} alt="" />
                <h2>{name}</h2>
                <p className='text-white '>{expertize}</p>
</div>   
        </div>
    );
};

export default Expert;